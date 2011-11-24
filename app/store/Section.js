Ext.define('Myapp.store.Section', {
    extend: 'Ext.data.TreeStore',
    model: 'Myapp.model.Section',
    
    autoLoad: true,
    root: {},
    
    proxy: {
        type: 'ajax',
        url: 'data/data.json',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});
