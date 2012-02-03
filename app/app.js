/**
 * @filename app.js
 *
 * @name Sencha Touch 2.0 MVC application test
 * @fileOverview MVC App for testing Sencha Touch 2.0 NestedList component
 *
 * @author Constantine V. Smirnov kostysh(at)gmail.com
 * @date 20120202
 * @version 0.6
 *
 * @requires touch/sencha-touch-all-debug.js (version 2.0 Beta)
 * @requires touch/resources/css/sencha-touch.css
 *
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'Myapp',
    
    views: [
        'Viewport',
        'Welcomescreen',
        'Sectionslist',
        'Product'
    ],
    
    controllers: [
        'Main'
    ],
    
    launch: function(){
        Ext.create('Myapp.view.Viewport');
    }    
});
