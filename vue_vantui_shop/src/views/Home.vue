<template>
  <div class="home">
    <!-- <van-button type="primary">主要按钮</van-button> -->
    <van-search
      v-model="SearchVal"
      disabled
      shape="round"
      background="#fff"
      placeholder="請輸入搜索關鍵詞"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="darkred">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <img :src="item.image_url" width="100%" alt="item.name" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from 'axios'
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
