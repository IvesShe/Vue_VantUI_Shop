<template>
  <div>
    <div class="history">
      <div class="top">
        <h4>歷史記錄</h4>
        <van-icon name="delete-o" />
      </div>

      <div class="down">
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
      </div>
    </div>
    <div class="history">
      <div class="top">
        <h4>熱門搜索</h4>
      </div>

      <div class="down">
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
      </div>
    </div>
  </div>
</template>

<script>
import { GetPopupData } from '@/request/api'
export default {
  data() {
    return {
      SearchVal: "",
    }
  },
  methods: {

  },
  created() {
    GetPopupData().then(res => {
      console.log("@@@GetPopupData", res)
    })
  },

  components: {

  }
}
</script>

<style lang="less" scoped>
.history {
  padding: 0 2%;
  background: #fff;
  margin-bottom: 0.2rem;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.5rem;
    font-size: 0.2rem;
    h4 {
      font-weight: normal;
    }
  }
  .down {
    .van-tag {
      font-size: 0.14rem;
      margin-right: 0.05rem;
      margin-bottom: 0.05rem;
      padding: 0.03rem;
    }
  }
}
</style>
