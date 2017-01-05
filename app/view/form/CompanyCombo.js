Ext.define('template.view.form.CompanyCombo', {
    extend: 'eui.form.field.ComboBox',
    xtype: 'companycombo',
    displayField: 'name',
    valueField: 'code',
    editable: false,
    emptyText: '선택하세요',
    autoLoadOnValue: true,

    store: {
        proxy: {
            type: 'ajax',
            url: 'resources/data/companys.json',
            reader: {
                type: 'json',
                rootProperty: 'data'
            }
        },
        fields: [
        ]
    }
});