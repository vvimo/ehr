<template>
  <div class="v-login">
    <lang-select class="set-language"></lang-select>
    <div class="v-login-setup">
      <h1 class="v-login-title">
        {{ $t('login.logIn') }}
        <img src="@/assets/logo.png">
      </h1>
      <h3 class="v-login-msg">{{ $t('login.title') }}</h3>
      <el-form class="v-login-form" :model="form" ref="form" :rules="rules">
        <el-form-item prop="username">
          <el-input :placeholder="$t('login.username')" v-model="form.username" >
            <i slot="prefix" class="el-input__icon el-icon-message"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input :placeholder="$t('login.password')" v-model="form.password" type="password" @keyup.enter.native="submit('form')">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-form-item>
        <el-form-item style="padding-top: 20px">
          <el-button type="primary" @click.native="submit('form')" :disabled="loading">{{ loading ? ($t('login.loading') + '...') : $t('login.logIn') }}</el-button>
        </el-form-item>
      </el-form>
    </div>
    <p class="v-login-feedback">新ICP备 17000548号    @ 2016 Powered by 新疆银行</p>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'

export default {
  components: { LangSelect },
  name: 'login',
  data () {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '用户名', trigger: 'blur' },
          { min: 5, message: '用户名至少6位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码', trigger: 'blur' },
          { min: 6, message: '密码至少6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.form.validate(async(valid) => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('Login', this.form).then((res) => {
            this.loading = false
            if (res) {
              this.$message({
                showClose: true,
                message: res,
                type: 'error'
              })
            } else {
              this.$router.push({ path: '/' })
            }
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
