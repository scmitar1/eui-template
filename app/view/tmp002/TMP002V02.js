Ext.define('template.view.tmp002.TMP002V02', {
    extend: 'eui.grid.Panel',
    xtype: 'TMP002V02',

    plugins: {
        ptype: 'cellediting',   // 셀에디터를 추가.
        clicksToEdit: 2         // 더블클릭을 통해 에디터로 변환됨.
    },

    selModel: {     // 그리로우를 클릭시 체크박스를 통해 선택되며 체크와 체크해제
          selType: 'checkboxmodel'
    },

    // 페이징 툴바 활성화.
    usePagingToolbar: true,

    listeners: {                // ViewController클래스에 정의됨.
        select: 'onGridSelect'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            ui: 'plain',
            items: [
                '->',
                {
                    xtype: 'component',
                    html: '단위 : 백만원'
                }
            ]
        }
    ],
    columns: [
        {
            xtype: 'rownumberer'
        },
        {
            text: '한글',
            dataIndex:'USEPRSN_NM',
            locked: true,
            editor: {
                bind: {
                    disabled: '{!formStatus.phantom}'
                },
                xtype: 'euitext'
            }
        },
        {
            text: '영문',
            locked: true,
            dataIndex:'ITEM',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            text: '조건',
            dataIndex: 'CNDT',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            text:'기준일자',
            dataIndex:'STD_DT',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            text:'숫자',
            dataIndex:'MSG',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            text:'메시지',
            dataIndex:'MSG',
            editor: {
                xtype: 'euitext'
            }
        },
        {
            // data 형식 "INPUT_DT" : "10/12/2012",
            text:'입력',
            xtype: 'euidatecolumn',
            dataIndex:'INPUT_DT',
            editor: {
                xtype: 'euidate'
            }
        },
        {
            // "UPDATE_DT" : "2012-02-19",
            text:'수정',
            xtype: 'euidatecolumn',
            dataIndex:'UPDATE_DT',
            editor: {
                allowBlank: false,
                xtype: 'euidate'
            }
        },
        {
            // "RELEASE_DT" : "2012-01-10 13:12:34"
            text:'수정',
            format: 'Y-m-d H:i:s',
            xtype: 'euidatecolumn',
            dataIndex:'RELEASE_DT',
            editor: {
                xtype: 'euidate'
            }
        }
    ]
});