<template>
    <div class="loginBox">
        <el-form ref="loginFormRef" :model="loginForm" status-icon :rules="rules" label-width="70px" size="large"
            class="demo-loginForm loginForm" >
            <h2>后台管理登录</h2>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" class="loginButton" @click="submitForm(loginFormRef)">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang='ts' setup>
import type { FormInstance } from 'element-plus'
import { ref, reactive,toRefs} from 'vue'
import { useRouter } from "vue-router";
import { InitData } from "@/types/login";
import { login } from "@/http/api/Login";  

const router = useRouter()
const {loginForm, loginFormRef} = reactive(new InitData())
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
        { min: 3, max: 8, message: '字符长度在3-8之间', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
        { min: 3, max: 8, message: '字符长度在3-8之间', trigger: 'blur' },
    ]
}
const submitForm = (formEl?: FormInstance) => {
    formEl?.validate((valid) => {
        if (valid) {
            // login(loginForm)
            localStorage.setItem('token','456789')
            router.push('/')
        } else {
            console.log('error submit!')
            return false
        }
    })
}
</script>

<style scoped lang='less'>
.loginBox {
    width: 100%;
    height: 100%;
    background: url('@/assets/img/Login/2057347.jpg') center no-repeat;
    background-size: cover;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .loginForm{
        width: 450px;
        padding: 20px;
        background-color: rgba(255, 255, 255, .5);
        border-radius: 10px;
        h2{
            text-align: center;
            margin-bottom: 20px;
        }
        .loginButton{
            width: 100%;
        }
    }
}
</style>