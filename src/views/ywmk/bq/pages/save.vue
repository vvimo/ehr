<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="上班时间" prop="sbsj">
            <el-time-picker
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
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
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
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
