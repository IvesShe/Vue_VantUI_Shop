<template>
  <div class="popup">
    <van-search
      v-model="iptVal"
      show-action
      :placeholder="iptPlaceholder"
      @search="onSearch"
      @cancel="onCancel"
    />
    <HistoryHot />
  </div>
</template>

<script>
// import { Button } from 'vant';
// Vue.use(Button);
import HistoryHot from "@/components/HistoryHot.vue"

export default {
  data() {
    return {
      iptVal: "",
      iptPlaceholder: "请输入搜索关键词",

      // 1-代表歷史記錄與熱門搜索區塊
      // 2-代表列表區塊
      // 1-代表產品區塊      
      blockShow: 0,

    }
  },

  components: {
    HistoryHot
  },

  methods: {
    onSearch() {

    },
    onCancel() {
      // this.$router.push('/home')
      // go(-1)代表 回上一個頁面
      this.$router.go(-1)
    },
  },
}
</script>
<style lang="less" scoped>
.popup {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background: #efefef;
}
</style>
