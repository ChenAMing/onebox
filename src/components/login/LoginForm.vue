<script lang="ts" setup>
import { reactive } from 'vue'

const user = reactive({
  act: '',
  pwd: '',
})

const cls = 'border border-slate-300'
</script>

<template>
  <div class="h=20 w-40">
    <label for="act">账号</label>
    <input id="act" type="text" v-model="user.act" :class="cls" />

    <label for="pwd">密码</label>
    <input id="pwd" type="password" v-model="user.pwd" :class="cls" />

    <button type="button" class="border border-slate-300">登录</button>
  </div>
</template>
