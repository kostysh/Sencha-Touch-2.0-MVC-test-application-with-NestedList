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
                html: '<h2>NestedList component in Sencha Touch 2.0 '+
                      'application architecture</h2>'
            }
        ]
    }
});
