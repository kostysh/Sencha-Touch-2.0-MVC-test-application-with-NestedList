Ext.define('Myapp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: [
        'Viewport',
        'Welcomescreen',
        'Sectionslist',
        'Product'
    ],
    
    models: [
        'Sections'
    ],
    
    stores: ['Sections'],
    
    refs: [
        {
            //build for us this.getViewport() method
            ref: 'viewport',
            selector: 'viewportview',
            xtype: 'viewportview',
            autoCreate: true
        },
        {
            //this.getProductCard
            ref: 'productCard',
            selector: '#productCard'
        },
        {
            //this.getProductTitle()
            ref: 'productTitle',
            selector: 'productview > #productTitle'
        },
        {
            //this.getProductFieldset()
            ref: 'productFieldset',
            selector: 'productview > #productFieldset'
        }
    ],
    
    init: function() {
        
        this.control({
            'sectionslist': {
                leafitemtap: this.onSectionsLeafItemTap
            },
            
            '#closeProductCard': {
                tap: this.onProductCardCloseBtn
            }
        });
        
        this.getViewport();
        
//        var sectionsStore = this.getSectionsStore();
//        sectionsStore.on({
//            scope: this,
//            load: 'onSectionsStoreLoad'
//        });
//        
//        sectionsStore.load();
    },
    
    onSectionsStoreLoad: function() {
        //show viewport after store loading
        this.getViewport();
    },
    
    onSectionsLeafItemTap: function(list, index) {
        var sectionsStore = list.getStore();
        var currentRecord  = sectionsStore.getAt(index);
        
        //create new productCard or use existed
        var productCard = this.getProductCard() || Ext.create('Myapp.view.Product');
        
        this.getProductTitle().setTitle(currentRecord.data.name);
        this.getProductFieldset().setTitle(currentRecord.data.description);
        productCard.setRecord(currentRecord);
        
        Ext.Viewport.add(productCard);
        productCard.show();
    },
    
    onProductCardCloseBtn: function() {
        this.getProductCard().hide();
    }
});
