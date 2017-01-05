Ext.define('template.view.tmp010.TMP010V02', {
    extend: 'eui.tree.Panel',
    xtype: 'TMP010V02',
    height: 300,
    margin : 10,
    plugins: {
        ptype: 'cellediting',   // 셀에디터를 추가.
        clicksToEdit: 2         // 더블클릭을 통해 에디터로 변환됨.
    },
    selModel: {     // 그리로우를 클릭시 체크박스를 통해 선택되며 체크와 체크해제
        selType: 'checkboxmodel'
    },
    store: {
        fields: [],
        data: [
            {
                name: '홍길동'
            }
        ]
    },
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '사용자',
            dataIndex:'USEPRSN_NM',
            editor: {
                xtype: 'euipopuppicker',
                valueField: 'NAME',
                popupConfig :{
                    popupWidget : 'popup01',
                    title: 'aa',
                    width: 600,
                    height : 500
                }
            }
        },
        {
            text: '영문이름',
            dataIndex:'USEPRSN_NM2',
            editor: {
                xtype: 'euipopuppicker',
                valueField: 'ENG_NAME',
                bind: '{FORMRECORD.ENG_NAME2}',
                listeners: {
                    popupsetvalues: 'setPopupValues'
                },
                popupConfig :{
                    popupWidget : 'popup01',
                    title: 'aa',
                    width: 600,
                    height : 500
                }
            }
        }
    ]
});