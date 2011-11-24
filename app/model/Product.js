Ext.define('Myapp.model.Product', {
    extend: 'Ext.data.Model',
    
    fields: [
        {name: 'id', type: 'string'},
        {name: 'name', type: 'string'}
    ],
    
    belongsTo: 'items'
});
