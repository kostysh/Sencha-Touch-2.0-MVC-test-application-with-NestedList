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
        Ext.create('Myapp.view.Homepage');
        
        this.control({
            //some bindings here
        });
    }    
    
});
