Ext.define('Myapp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: [
        'Viewport',
        'Welcomescreen',
        'Sectionlist',
        'Productlist',
        'Product'
    ],
    
    models: [
        'Sectionlist',
        'Productlist'
    ],
    
    stores: ['Sections'],
    
    refs: [
        {
            ref: 'viewport',
            selector: 'viewportview',
            xtype: 'viewportview',
            autoCreate: true
        }
    ],
    
    init: function() {
        var viewport = this;
        viewport.control({
            
            'sectionlist': {
                leafitemtap: function(list, index, item, e) {
                    var sectionList = list.getParent();
                    var sectionStore = list.getStore();
                    var currentRecord  = sectionStore.getAt(index);
                    
                    if (currentRecord.isLeaf()) {
                       var detailStore = Ext.create('Ext.data.Store', {
                           model: 'Myapp.model.Productlist',
                           root: {},
                           data: currentRecord.data.products
                       });
                       
                       var productList = Ext.create('Myapp.view.Productlist', {
                           store: detailStore,
                           onItemDisclosure: function() {
                               var productPanel = Ext.create('Myapp.view.Product');
                               productPanel.show();
                               
                           }
                       });
                       
                       var detailCard = sectionList.setDetailCard(productList);
                       
                    }
                }
            }
        });
        
        var sectionsStore = this.getSectionsStore();
        sectionsStore.on({
            scope: this,
            load: 'onSectionsStoreLoad'
        });
        
        sectionsStore.load();
    },
    
    onSectionsStoreLoad: function() {
        this.getViewport();
    }    
});
