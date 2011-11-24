Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Myapp',
    controllers: ['Main'],
    
    launch: function() {
        Ext.create('Myapp.view.Homepage');
    }
});
