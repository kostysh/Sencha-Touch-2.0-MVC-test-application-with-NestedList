Ext.define('Myapp.model.Productlist', {
    extend: 'Ext.data.Model',
    fields: ['id', 'name'],
    
    belongsTo: 'Sectionlist'
});