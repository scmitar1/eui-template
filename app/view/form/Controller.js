Ext.define('template.view.form.Controller', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.sample-form',

    listen: {
        component: {
            'sample-form': {
                render: 'setRecord'
            }
        }
    },

    setRecord: function () {
       var me = this;
        Util.CommonAjax({
            url:'/APPS/template/tmpForm.do',
//            url : 'resources/data/formdata.json',
        	pCallback: function (v, params, result) {
                if (result.success) {
                     me.getViewModel().set('RECORD', Ext.create('Ext.data.Model', result.data[0]));
                     me.getViewModel().get('RECORD').set('CONT_ID', Util.generateUUID());
                } else {
                    Ext.Msg.alert('저장실패', '저장에 실패했습니다...');
                }
            }
        });
    },

    onSaveMember: function () {
        var data = this.getViewModel().get('RECORD').getData();
        data['__rowStatus'] = 'U';
        Util.CommonAjax({
            method: 'POST',
            url: '/APPS/template/tmpFormSV.do',
            params: {
               data : data
            },
            pCallback: function (v, params, result) {
                if (result.success) {
                    Ext.Msg.alert('저장성공', '정상적으로 저장되었습니다.');
                } else {
                    Ext.Msg.alert('저장실패', '저장에 실패했습니다...');
                }
            }
        });
    },

    checkBoxgroupAllCheck: function () {
        var ckg = this.lookupReference('euicheckboxgroup01');
        ckg.setValue(['A1','A2','A3','A4','A5'])
    },

    checkBoxgroupAllUnCheck: function () {
        var ckg = this.lookupReference('euicheckboxgroup01');
        ckg.setValue()
    },

    /***
     * 라디오 그룹을 변경한다.
     * @param combo
     * @param record
     */
    setRadioGroup: function (combo, record) {
        var rg = this.lookupReference('euiradiogroup');
        rg.setValue(record.get(combo.valueField))
    },
    
    setPopupValues: function (trigger, record, valueField, displayField) {
        var formrecord = this.getViewModel().get('RECORD');
        formrecord.set(record.getData());
        formrecord.set('DESC', record.get('NAME') + '('+ record.get('ENG_NAME') +')'+ record.get('AGE') + record.get('ADDRR'));
    }
});
