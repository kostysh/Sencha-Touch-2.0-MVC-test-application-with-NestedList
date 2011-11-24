Ext.define('Myapp.view.Welcomescreen', {
    extend: 'Ext.Container',
    xtype: 'welcomescreen',
        
    config: {
        defaults: {
            styleHtmlContent: true
        },
        
        items: [
            {
                xtype: 'container',
                html: '<h2>Hello world!!!</h2>'
            }
        ]
    }
});
