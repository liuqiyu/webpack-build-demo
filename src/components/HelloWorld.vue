<template>
  <div class="preview">
    <asp-smart-form ref="aspSmartForm"
                    :formJson="formjson"
                    :oldModel="oldModel"
                    v-model="model"
                    :status="status"
                    :before-submit-custom-data="beforeSubmitCustomData"
                    :before-submit-model-data="beforeSubmitModelData"
                    @on="onbind">
      <template v-slot:level="slotProp">
        <el-select v-model="value"
                   @change="aaaa(slotProp)"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </template>
      <template v-slot:aaname="slotProp">
        <el-select v-model="value"
                   @change="aaaa(slotProp)"
                   placeholder="请选择">
          <el-option v-for="item in options"
                     :key="item.value"
                     :label="item.label"
                     :value="item.value">
          </el-option>
        </el-select>
      </template>
    </asp-smart-form>
  </div>
</template>

<script>
export default {
  name: 'preview',
  data () {
    return {
      status: '',
      formjson: null,
      model: {},
      oldModel: {},
      statusList: [],
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }
      ]
    }
  },
  watch: {},
  async mounted () {
    const data = require('./form.json')
    this.formjson = data
    this.model = this.formjson.model
    if (this.formjson.formConfig.statusList && this.formjson.formConfig.statusList.length > 0) {
      this.statusList = this.formjson.formConfig.statusList
      this.status = this.formjson.formConfig.statusList[0]
    }
    this.dataDyDataSet() // 此行代码，请不要删除
  },
  methods: {
    aaaa (slotProp) {
      console.log(JSON.stringify(slotProp))
    },
    change (tab, event) {
      this.$forceUpdate()
    },
    beforeSubmitCustomData ({ item, parent, type, index, model, row, fileData, subFormSelectData }, callback) {
      const param = {
        auditResult: model.auditResult,
        auditDescription: model.auditDescription,
        id: this.$route.query.productId
      }
      callback(param)
    },
    beforeSubmitModelData ({ item, parent, type, index, model, row, fileData, subFormSelectData }, callback) {
      callback(model)
    },
    async onbind ({ item, parent, type, index, model, row, fileData, subFormSelectData }) {
      // const aaa = this.$refs.aspSmartForm.asp_getModel()
      // console.log(aaa)
      // debugger
      console.log({ item, parent, type, index, model, row, fileData, subFormSelectData })
      switch (item.columnName) {
        case 'productManagerList':
          break
        case 'submit':
          this.$refs.aspSmartForm.asp_validateSubFormField('table1_1596790474192', 0, ['a', 'b'])
          break
      }
    },
    // 数据联动设置
    dataDyDataSet () {
      // this.$refs.aspSmartForm.asp_setValue('asp_a', '1')
      // this.$refs.aspSmartForm.asp_setValue('asp_b', '2')
      // this.$refs.aspSmartForm.asp_setTableValue('asp_table', [{ asp_a: '1' }, { asp_a: '1' }])
      // this.$refs.aspSmartForm.asp_setTableValue('asp_table_a', [{ asp_a: '1' }, { asp_a: '2' }, { asp_a: '1' }, { asp_a: '2' }])
      // this.$refs.aspSmartForm.asp_setTableValue('asp_table_b', [{ asp_a: '1' }, { asp_a: '2' }])

      // debugger
      this.$refs.aspSmartForm.asp_setValue('main_optionPicker_a', '1')
      // this.$refs.aspSmartForm.asp_setValue('main_optionPicker_a', '1')
    }
  }
}
</script>
