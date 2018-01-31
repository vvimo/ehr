<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
        <el-col :span="12">
          <el-form-item label="姓名">
            <span>{{ ruleForm.xm }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="员工编号">
            <span>{{ ruleForm.ygbh }}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="部门">
            <span>{{ ruleForm.bm }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="岗位">
            <span>{{ ruleForm.gw }}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="上班时间">
            <span>{{ ruleForm.sbsj }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="下班时间">
            <span>{{ ruleForm.xbsj }}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="补签日期">
            <span>{{ ruleForm.bqrq }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="补签原因">
            <span>{{ ruleForm.bqyy }}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="复核人">
            <span>{{ ruleForm.fhr }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="复核部门">
            <span>{{ ruleForm.fhbm }}</span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="复核时间">
            <span>{{ ruleForm.fhsj }}</span>
          </el-form-item>
        </el-col>
        <el-col :span="12">
        </el-col>
      </el-row>
      <el-form-item label="审核列表">
        <el-table border :data="tableData" >
          <el-table-column prop="shr" label="审核人"></el-table-column>
          <el-table-column prop="bm" label="部门"></el-table-column>
          <el-table-column prop="jl" label="结论"></el-table-column>
          <el-table-column prop="yj" label="意见"></el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item label="审核意见">
        <el-input type="textarea" :row="3" v-model="ruleForm.shyj"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="submitForm('ruleForm')">通过</el-button>
        <el-button type="danger" @click="resetForm('ruleForm')">不通过</el-button>
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
        xm: '李xx',
        ygbh: 'xj0016',
        bm: 'xx部',
        gw: 'xxx',
        sbsj: '10:20:26',
        xbsj: '20:30:15',
        bqrq: '2018-01-20',
        bqyy: '忘打卡',
        fhr: '张xx',
        fhbm: 'xxx部',
        fhsj: '2018-01-20',
        shyj: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      tableData: [{
        shr: '王xxx',
        bm: 'xxx部',
        jl: '通过',
        yj: ''
      }]
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
