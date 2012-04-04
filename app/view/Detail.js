Ext.define('App.view.Detail', {
    extend: 'Ext.Panel',
    xtype: 'detailcard',
    id: 'detailcard',
    
    config: {
        scrollable: true,
        
        defaults: {
            styleHtmlContent: true
        },
        
        items: [
            {
                id: 'description',
                html: ''
            },
            
            {
                id: 'productBtn',
                xtype: 'button',
                ui: 'confirm',
                margin: 10,
                text: ''
            }
        ]
    }
});