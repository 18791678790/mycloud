<template>
    <div>
        <h1>扫码登录</h1>
        <img :src="qrcode" alt="">
    </div>
</template>

<script>
export default {
    name: 'qrcode',
    data() {
        return {
            qrcode: '',
        };
    },
    async created() {
            
        }
    }
</script>


<style>


</style>