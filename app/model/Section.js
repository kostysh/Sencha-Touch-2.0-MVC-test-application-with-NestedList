Ext.define('Myapp.model.Section', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'string'},
        {name: 'text', type: 'string'}
    ],
        
    hasMany: {
        name: 'products',
        model: 'Myapp.model.Product'
    }
});
