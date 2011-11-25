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
                html: '<h2>Hey dude! NestList at the next door!!!</h2>'
            }
        ]
    }
});
