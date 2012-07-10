Ext.define('App.view.Homepage', {
    extend: 'Ext.Panel',
    xtype: 'homepage',
    
    requires: [
        'Ext.TitleBar'
    ],
    
    config: {
        scrollable: true,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'NestedList MVC Demo'
            },

            {
                styleHtmlContent: true,
                maxWidth: 750,
                html: '<div style="padding: 10px; -webkit-border-radius: 7px; background-color: rgba(255,255,255,0.5);"><p>This application demonstrates a simple yet powerful way to works with NestedList component in MVC model ' +
                      'and how Sencha Touch history/routes feature can works in relation to this component.</p>' +
                      '<p>Requires: <a target="_blank" href="http://www.sencha.com/products/touch/">Sencha Touch 2.0</a></p>' +
                      '<p>If you have any questions about this application, contact with developer via <a target="_blank" href="http://mindsaur.com">http://mindsaur.com</a></p></div>'
            }
        ]
    }
});