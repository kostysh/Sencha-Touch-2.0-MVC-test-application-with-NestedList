Ext.define('Myapp.view.Welcomescreen', {
    extend: 'Ext.Container',
    xtype: 'welcomescreen',
        
    config: {
        title: 'home',
        iconCls: 'home',
    
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
