/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'template',
    requires: [
        'eui.Config',
        'template.view.main.Main'
    ],
    extend: 'template.Application',
    init: function() {
        eui.Config.initLocaleMessage(function() {
            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: [{
                    xtype: 'app-main'
                }]
            })
        });
        //Util.globalCheckLogin('template');
    }
});
