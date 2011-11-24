Ext.define('Myapp.model.Section', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'},
        {name: 'items', type: 'auto'}
    ],
        
    hasMany: {
        name: 'products',
        model: 'Myapp.model.Product'
    }
});
