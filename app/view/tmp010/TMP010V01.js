Ext.define('template.view.tmp010.TMP010V01',{
    extend: 'eui.form.Panel',
    xtype: 'TMP010V01',
    margin : 10,
    tableColumns: 2,
    requires: [
    	'template.view.common.BizField',
        'template.view.common.PopUp01', // 호출 팝업
        'template.view.common.AddressField'  // 주소 팝업
    ],
    items: [
        {
            bindVar : {
                FIELD1 : '{FORMRECORD.BIZ_NO}',
                FIELD2 : '{FORMRECORD.BIZ_NAME}'
            },
            xtype: 'bizfield'

        },
        {
            field: 'TEXT',
            xtype: 'euitext'
        },
        {
            xtype: 'euipopuppicker',
            fieldLabel: '이름',
            valueField: 'NAME',
            bind: '{FORMRECORD.NAME}',
            popupConfig :{
                popupWidget : 'popup01',
                title: 'aa',
                width: 600,
                height : 500
            }
        },
        {
            xtype: 'euipopuppicker',
            fieldLabel: '영문이름',
            bind: '{FORMRECORD.ENG_NAME}',
            valueField: 'ENG_NAME',
            listeners: {
                popupsetvalues: 'setPopupValues'
            },
            popupConfig :{
                popupWidget : 'popup01',
                title: 'aa',
                width: 600,
                height : 500
            }
        },
        {
            xtype: 'euitext',
            name: 'age',
            bind: '{FORMRECORD.AGE}',
            fieldLabel: '나이'
        },
        {
            xtype: 'euitext',
            bind: '{FORMRECORD.ADDRR}',
            name: 'address',
            fieldLabel: '주소'
        },
        {
            colspan: 2,
            xtype: 'euitext',
            bind: '{FORMRECORD.DESC}',
            name: 'address',
            fieldLabel: '설명'
        },
        {
            colspan: 2,
            bindVar : {
                ZIPCODE : '{FORMRECORD.ZIPCODE}',
                ADDRESS1 : '{FORMRECORD.ADDRESS1}',
                ADDRESS2 : '{FORMRECORD.ADDRESS2}'
            },
            xtype: 'addressfield'

        }
    ]
});