Ext.define('Myapp.controller.Main', {
    extend: 'Ext.app.Controller',
    
    views: [
        'Viewport',
        'Welcomescreen'
    ],
    
    models: [
        'Sectionlist',
        'Productlist'
    ],
    
    stores: ['Sections'],
    
    init: function() {
        Ext.create('Myapp.view.Viewport');
        
        this.control({
            //some bindings here
        });
    }    
    
});
