Ext.define('Myapp.model.Product', {
    extend: 'Ext.data.Model',
    
    fields: [
        {name: 'id', type: 'string'},
        {name: 'text', type: 'string'}
    ],
    
    belongsTo: 'Myapp.model.Section'
});
