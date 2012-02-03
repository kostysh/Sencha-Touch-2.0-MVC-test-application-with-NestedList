Ext.define('Myapp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: [
        'Sections'
    ],
    
    stores: [
        'Sections'
    ],
    
    config: {
        refs: {
            productCard: '#productCard',
            productTitle: '#productCard > #productTitle',
            productFieldset: '#productCard > #productFieldset'
        }
    },
    
    init: function() {
        
        this.control({
            'sectionslist': {
                leafitemtap: this.onSectionsLeafItemTap
            },
            
            '#closeProductCard': {
                tap: this.onProductCardCloseBtn
            }
        });
    },
    
    onSectionsLeafItemTap: function(list, sublist, index) {
        var sectionsStore = sublist.getStore();        
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
