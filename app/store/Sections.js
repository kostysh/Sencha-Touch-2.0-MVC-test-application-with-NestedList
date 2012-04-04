Ext.define('App.store.Sections', {
    extend: 'Ext.data.TreeStore',
    
    requires: [
        'App.model.Sections'
    ],
    
    config: {
        autoLoad: true,
        
        model: 'App.model.Sections',
        
        proxy: {
            type: 'ajax',
            url: 'resources/data/data.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }
});