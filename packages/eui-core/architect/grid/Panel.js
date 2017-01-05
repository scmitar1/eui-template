/*Ext.define('d',*/
{
    "classAlias": "widget.euigrid",
    "className": "eui.grid.Panel",
    "inherits": "Ext.grid.Panel",
    "autoName": "Grid",
    "helpText": "Grid",
    "toolbox": {
        "name": "Grid",
        "category": "EUI Grid",
        "groups": ["EUI"]
    },
    configs: [
        {
            name:"usePagingToolbar",
            type:"boolean"
        },
        {
            name: 'hiddenRowAddBtn',
            type: 'boolean'
        },
        {
            name: 'hiddenRowDelBtn',
            type: 'boolean'
        },
        {
            name: 'hiddenRowRegBtn',
            type: 'boolean'
        },
        {
            name: 'hiddenRowModBtn',
            type: 'boolean'
        },
        {
            name: 'hiddenRowSaveBtn',
            type: 'boolean'
        },
        {
            name: 'onRowAddHandler',
            type: 'string'
        },
        {
            name: 'onRowDelHandler',
            type: 'string'
        },
        {
            name: 'onRowRegHandler',
            type: 'string'
        },
        {
            name: 'onRowModHandler',
            type: 'string'
        },
        {
            name: 'onRowSaveHandler',
            type: 'string'
        }
    ],
    "events": [
        {
            "name": "regbtnclick",
            "params": [
                {
                    "name": "owner",
                    "type": "object"
                }
            ]
        },
        {
            "name": "rowdeletebtnclick",
            "params": [
                {
                    "name": "grid",
                    "type": "object"
                }
            ]
        },
        {
            "name": "modbtnclick",
            "params": [
                {
                    "name": "owner",
                    "type": "object"
                }
            ]
        },
        {
            "name": "rowaddbtnclick",
            "params": [
                {
                    "name": "grid",
                    "type": "object"
                }
            ]
        },
        {
            "name": "savebtnclick",
            "params": [
                {
                    "name": "owner",
                    "type": "object"
                }
            ]
        }
    ]
}
/*)*/
