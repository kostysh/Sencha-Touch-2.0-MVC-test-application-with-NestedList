Ext.define('Myapp.store.Sections', {
    extend: 'Ext.data.TreeStore',
    
    config: {
        autoLoad: true,
        
        model: 'Myapp.model.Sections',
        
        proxy: {
            type: 'ajax',
            url: 'data/data.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    }   
});
