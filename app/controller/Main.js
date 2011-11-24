Ext.define('Myapp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: [
        'Homepage',
        'Welcomescreen',
        'Catalog'
    ],
    
    models: [
        'Product',
        'Section'        
    ],
    
    stores: ['Section'],
    
    init: function() {
        
        this.control({
            //some bindings here
        });
    }    
    
});
