<template>
  <div>
    <components-user v-show="Usershow"></components-user>
    <div class="container">
      <nav class="nav-header">
        <header>
          <i class="avatar" @click="ShowUserPage"></i>
          <router-link to="/" class="brand"></router-link>
          <router-link to="/search" class="search"></router-link>
        </header>
        <div class="swipe">
          <mt-swipe :auto="5000">
            <mt-swipe-item><img src="../assets/images/1.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/2.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/3.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/4.jpg" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/images/5.jpg" alt=""></mt-swipe-item>
          </mt-swipe>
        </div>
      </nav>
      <nav class="home-nav">
        <router-link
          class="guide-nav-div"
          to="./"
          v-for="(item,index) in type"
          :key="index"
          :to="{path:'category',query: {type: item.num}}"

        >
          <i class="icon icon-sort"></i>
          <span class="guide-nav-h">{{item.word}}</span>
        </router-link>
      </nav>


    </div>
    <div v-if="!loading">
    <components-book-plate :booklist="booklist | free" title="限时免费"></components-book-plate>
    <components-plate :booklist="booklist | hot" title="热门小说"></components-plate>
    <components-book-list :datalist="booklist | xuanhuan" title="玄幻小说"></components-book-list>
    <components-plate :booklist="booklist | jingpin" title="精品汇聚"></components-plate>
    <components-book-list :datalist="booklist | dashen" title="大神作品展"></components-book-list>
    </div>
    <loading v-show="loading"></loading>
  </div>

</template>

<script>
  import  axios from 'axios';
  import ComponentsUser from  './../components/User.vue'
  import ComponentsPlate from  './../components/Plate.vue'
  import ComponentsBookList from './../components/BookList.vue'
  import ComponentsBookPlate from './../components/BookPlate.vue'
  import loading from  './../components/Loading/Loading.vue'
  export default {
    data(){
      return{
        booklist:[],
        type:[
          {
          num: 1,
          word: '玄幻'
          },
          {
            num: 2,
            word: '修真'
          },
          {
            num: 3,
            word: '都市'
          },
          {
            num: 4,
            word: '历史'
          },
          {
            num: 5,
            word: '游戏'
          }],
        loading: false
      };
    },
    created() {
      this.getData()
    },
    components:{
      ComponentsUser,
      ComponentsPlate,
      ComponentsBookList,
      ComponentsBookPlate,
      loading
    },
    computed: {
      Usershow(){
        return  this.$store.state.showUser;
      }
    },
    methods:{
      getData(){
        this.loading = true
        axios.get('http://39.108.14.248:3333/booklist')
          .then((res)=>{
            this.loading = false;
          if (res.data.length>0){
            this.booklist = res.data;
            this.$store.state.booklist = this.booklist;
          }
        })
      },
      ShowUserPage(){
        this.$store.state.showUser = true;
      }
    },
    filters: {
      hot(value) {
        if (!value) return ''
        var arr = []
        value.forEach((item, index) => {
          if (index < 80) {
              arr.push(item)
          }
        })
        return arr
      },
      xuanhuan(value){
        if (!value) return ''
        var arr = [];
        var count=0;
        value.forEach((item, index) => {
           if(item.type=="玄幻"){
             count++
             if(count>3){
               return true;
             }
             arr.push(item);
           }
        })
        return arr;
      },
      jingpin(value){
        if (!value) return ''
        var arr = [];
        var count=0;
        value.forEach((item, index) => {
          if (index%4 == 1)
            arr.push(item);
        })
        return arr;
      },
      dashen(value){
        if (!value) return ''
        var arr = [];
        var count=0;
        value.forEach((item, index) => {
          if (index%5 == 1) {
            count++
            if (count > 3) {
              return true;
            }
            arr.push(item);
          }
        })
        return arr;
      },
      free(value) {
        if (!value) return ''
        var arr = []
        value.forEach((item, index) => {
          if (index < 20) {
            if (index % 3 == 2) {
              arr.push(item)
            }
          }
        })
        return arr
      },
    }


  }
</script>

<style lang="less" type="text/less">
  *{
    margin: 0;
    padding: 0;
  }
  .container {
    background-color: #f6f7f9;
  }
  .nav-header {
    header {
      position: fixed;
      top: 0px;
      z-index: 3;
      width: 94%;
      display: flex;
      height: 45px;
      padding: 0 15px;
      justify-content: space-between;
      align-items: center;
      font-size: 20px;
      background: #f8f8f8;
      .brand {
        display: block;
        width: 100px;
        height: 45px;
        background: url(../assets/images/logo.png) no-repeat center center;
        background-size: contain;
        background-size: 100%;
      }
      .avatar {
        width: 20px;
        height: 20px;
        background: url(../assets/images/my.png) no-repeat left ;
        background-size: 100%;
      }
      .search{
        width: 20px;
        height: 20px;
        background: url(../assets/images/search.png) no-repeat left ;
        background-size: 100%;
      }
    }
  }

  .home-nav {
    display: flex;
    padding: 10px 0;
    margin: 10px 0;
    background-color: #fff;
    .guide-nav-div {
      flex: 1;
      display: flex;
      flex-direction: column;
      /*justify-content: center;*/
      align-items: center;
      text-decoration: none;
      > i {
        width: 25px;
        height: 25px;
        background-image: url(../assets/images/sprite.0.50.png);
      }
      &:nth-of-type(1) {
        i {
          background-position: -62px -28px;
        }
      }
      &:nth-of-type(2) {
        i {
          background-position: 0 0;
        }
      }
      &:nth-of-type(3) {
        i {
          background-position: 0px -30px;
        }
      }
      &:nth-of-type(4) {
        i {
          background-position: 0 -60px;
        }
      }
      &:nth-of-type(5) {
        i {
          background-position: -30px -30px;
        }
      }
      .guide-nav-h{
        margin-top: 10px;
        color: #666;
        font-size: 14px;
      }
    }
  }

  .swipe {
    height: 140px;
    margin-top: 45px;
    img {
      width: 100%;
    }
  }
</style>
