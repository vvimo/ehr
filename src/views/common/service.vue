<template>
  <div>
    <el-form v-if="type === 'bq'" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="补签日期">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange" style="display: inline-block; margin-left: 30px">
          <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="上班时间" prop="sbsj">
            <el-time-picker
              width="100%"
              v-model="ruleForm.sbsj"
              :picker-options="{
                selectableRange: '00:00:00 - 12:59:59'
              }"
              placeholder="任意时间点">
            </el-time-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="下班时间" prop="xbsj">
            <el-time-picker
              width="100%"
              v-model="ruleForm.xbsj"
              :picker-options="{
                selectableRange: '12:59:59 - 23:59:59'
              }"
              placeholder="任意时间点">
            </el-time-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="补签原因">
        <el-input type="textarea" v-model="ruleForm.bqyy"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/**
 * 自助服务 - 申请
 */
export default {
  name: 'service',
  props: {
    type: {
      type: String
    }
  },
  data () {
    return {
      checkAll: false,
      isIndeterminate: true,
      cities: ['2018-02-06', '2018-02-12', '2018-02-23'],
      checkedCities: ['2018-02-06'],
      ruleForm: {
        sbsj: '',
        xbsj: '',
        bqyy: '',
        fhr: '张xx',
        fhbm: 'xxxx部'
      },
      rules: {
        sbsj: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        xbsj: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ]
      }
    }
  },
  computed: {},
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleCheckAllChange (val) {
      this.checkedCities = val ? this.cities : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  },
  mounted () {}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
