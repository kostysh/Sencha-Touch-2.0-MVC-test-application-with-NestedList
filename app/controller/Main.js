Ext.define('App.controller.Main', {
    extend: 'Ext.app.Controller',
    
    requires: [
        'App.view.Detail',
        'Ext.MessageBox'
    ],
    
    config: {
        refs: {
            mainView: '#mainview',
            mainList: '#mainlist',
            detailCard: '#detailcard'
        },
        
        routes: {
            ':id': 'showViewById',
            'section/:id': 'showSectionById',
            'section/:id/:product': 'showSectionById'
        },
        
        control: {
            mainView: {
                activeitemchange: 'onMainViewActiveItemChange'
            },
            
            mainList: {
                activeitemchange: 'onListActiveItemChange'
            },
            
            detailCard: {
                activate: 'onDetailCardActivate'
            }
        },
        
        history: null
    },
    
    init: function() {
        
        // Setup start history point
        this.setHistory(this.getApplication().getHistory());
    },
    
    addToHistory: function(id) {
        
        // Add new point to history
        this.getHistory().add(new Ext.app.Action({
            url: id
        }), true);
    },
    
    onDetailCardActivate: function(card, list) {
        
        // Get selected leaf node
        var record = list.getLastNode();
        
        // Get and update description
        var descriptionField = card.down('#description');
        descriptionField.setHtml(record.get('description'));        
        
        // Get and update product button
        var detailBtn = card.down('#productBtn');
        detailBtn.setText(record.get('name'));
        
        // Add custom tap listener for product button
        detailBtn.on({
            scope: record,
            tap: this.onDetailButtonTap
        });
    },
    
    onDetailButtonTap: function() {
        var record = this;
        Ext.Msg.alert(record.get('name'), record.get('description'), Ext.emptyFn);
    },
    
    onMainViewActiveItemChange: function(comp, activeItem, oldItem) {
        if (Ext.isDefined(oldItem)) {
            var id = activeItem.getId();
            
            if (id === 'sections') {
                
                // Restore node position and history
                var mainList = this.getMainList();
                var lastNode = mainList.getLastNode();
                
                if (!lastNode.isRoot()) {
                    var path = lastNode.getPath('id').slice(5);//strip /root from begin
                    this.addToHistory('section' + path);
                } else {
                    this.addToHistory('sections');
                }                
                
            } else {
                this.addToHistory(id);
            }
        }
    },
    
    onListActiveItemChange: function(comp, activeRecord, oldRecord) {
        var record;
        
        if (activeRecord.getId() == 'detailcard' && 
            Ext.isObject(oldRecord)) {
            
            record = oldRecord.getStore().getNode();
            var leafRecord = comp.getLastNode();
            this.addToHistory('section/' + record.get('id') + '/' + leafRecord.get('id'));
        } else {
            record = activeRecord.getStore().getNode();
            var id = record.get('id');
            
            if (id === 'root') {
                this.addToHistory('sections');
            } else {
                this.addToHistory('section/' + record.get('id'));
            }
        }
    },
    
    showViewById: function(id) {
        var mainView = this.getMainView();
        
        Ext.each(mainView.getInnerItems(), function(item) {
            if (item.getId() == id) {
                mainView.setActiveItem(item);
            }
        });
    },
    
    goToSelectedNode: function(list, store, id, product) {
        var node = store.getNodeById(id);
                    
        if (node) {
            list.goToNode(node);
            
            if (Ext.isDefined(product)) {
                var productNode = store.getNodeById(product);
                
                if (productNode) {
                    list.goToLeaf(productNode);
                }
            }
        }
    },
    
    showSectionById: function(id, product) {
        this.showViewById('sections');
        
        var self = this;
        var mainList = this.getMainList();
        var store = mainList.getStore();
        
        if (store.loading) {
            store.on({
                load: function() {
                   self.goToSelectedNode(mainList, store, id, product);
                }
            });
        } else {
            self.goToSelectedNode(mainList, store, id, product);
        }
    }
    
});