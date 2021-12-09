<template>
  <div class="home">
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <van-search
      v-model="SearchVal"
      disabled
      shape="round"
      background="#fff"
      placeholder="請輸入搜索關鍵詞"
      @click="goToPopup"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="darkred">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.image_url" width="100%" style="display: block;" alt="item.name" />
      </van-swipe-item>
    </van-swipe>

    <!-- <transition name="slide"> -->
    <transition name="van-slide-right">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { GetHomeData } from '@/request/api'
export default {
  name: 'Home',
  data() {
    return {
      SearchVal: "",
      // 輪播圖數組
      banner: [],
    }
  },
  methods: {
    goToPopup() {
      this.$router.push('/home/popup')
    }
  },
  created() {
    // 獲取首頁數據
    GetHomeData().then(res => {
      console.log("@@@res", res)
      if (res.errno == 0) {
        // 成功獲取到准確的數據
        console.log("@@@res.data", res)
        let { banner } = res.data
        this.banner = banner
        console.log("@@@banner", banner)
      }
    }).catch(err => {
      console.log("@@@err", err)
    })
  },

  components: {

  }
}
</script>

<style lang="less" scoped>
// .slide-enter,
// .slide-leave-to {
//   right: -100%;
// }
// .slide-enter-active,
// .slide-leave-active {
//   transition: right 1s linear;
// }

// .slide-enter-to,
// .slide-leave {
//   right: 0;
// }
</style>
