<template>
  <div class="book-detail">
    <loading v-show="loading"></loading>
    <div class="detail-content" v-if="bookDetail">
      <div class="detail-linear">
        <header class="detail-top">
          <span @click="back"class="back"></span>
          <span class="detail-title">{{bookDetail.name}}</span>
          <router-link tag='span' to="/" class="home-btn"></router-link>
        </header>
      </div>
      <div class="detail-con" v-if="!loading">
        <div class="detail-img">
          <img :src="bookDetail.images" alt="" @error="loadImage($event)">
        </div>
        <div class="detail-main">
          <h3 class="name">{{bookDetail.name}}</h3>
          <p class="author">作者：{{bookDetail.author}}</p>
          <p class="type">分类：{{bookDetail.type}}</p>
          <p class="word-count">{{bookDetail.wordcount}}万字</p>
          <rate :score="bookDetail.ratings"></rate>
        </div>
      </div>

      <div class="read-btn" v-if="!loading">
        <div>
          <button >
            <router-link :to="{path:'/reader/'+ bookDetail.id}">开始阅读</router-link>
          </button>
        </div>
        <div>
          <button>
            <router-link :to="{path:'/reader/'+ bookDetail.id}">开始阅读</router-link>
          </button>
        </div>
      </div>

    </div>
    <div v-if="!loading">
      <div class="detail-intro">
        <p :class="{show5: !showmore}" @click="showmore = !showmore">{{bookDetail.intro}}</p>
      </div>
      <div class="detail-tag">
        <h3 class="tag">类别标签</h3>
        <ul class="tag-btn clearfix">
          <li>
            {{bookDetail.type}}
          </li>
          <li>
            东方玄幻
          </li>
        </ul>
      </div>
    </div>
    <div class="detail-like">
      <h3 class="like-title">喜欢本书的人也喜欢</h3>
      <ul class="like-list">
        <li v-for="(item,index) in likes">
          <similar :like="item" :key="index"></similar>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
  import  loading from './../components/Loading/Loading.vue';
  import  axios from 'axios';
  import Rate from './../components/rate/rate';
  import  Similar from './../components/Similar.vue';
  import {mapState} from 'vuex'
  import defaultImage from './../assets/js/utils.js'
  export  default {
    data(){
      return{
        loading:false,
        bookDetail: {},
        showmore: false, //简介显示更多
        likes: [],  //相似推荐
      }

    },
    components:{
      loading,
      Rate,
      Similar
    },
    created(){
      this.getBookData(this.$route.params.id);
    },
    methods:{
      back() {
        this.$router.go(-1);
      },
      getBookData(bookId){
        this.loading = true;
        axios.get(`${this.common.api}/booklist?id=${bookId}`)
          .then((res)=>{
              this.loading = false;
              this.bookDetail = res.data;
              this.likes = res.data.like.split('-')
          });
      },
      //图片加载失败是使用默认图片
      loadImage(e) {
        this.common.defaultImage(e)
      }
    },
    watch: {
      //监听路由，点击底部喜欢的书籍路由会改变，重新获取数据
      $route(to, from) {
        if(to.params.id){
          this.getBookData(to.params.id)
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .ell {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .book-detail {
    padding: 0 20px;
  }

  .loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 999;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .detail-linear {
    background: -webkit-linear-gradient(bottom, #fff, rgba(255, 255, 255, 0) 108px) no-repeat center bottom;
    background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0) 8rem) no-repeat center bottom;
    .detail-top {
      position: fixed;
      display: flex;
      left: 0;
      top: 0;
      right: 0;
      height: 50px;
      align-items: center;
      justify-content: space-between;
      padding: 0px 5px;
      background-color: #eee;
      a:first-of-type {
        flex: 1;
      }
      .back {
        width: 30px;
        height: 30px;
        background: url("../assets/images/back.png");
      }
      span {
        font-size: 18px;
        line-height: 50px;
        color: #ed424b;
      }
    }
    .detail-title{
      text-align: center;
    }

  }

  .home-btn {
    display: block;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background: url("./../assets/images/home.png") no-repeat  right center ;
  }

  .detail-intro {
    padding: 20px 0;
    font-size: 16px;
    text-indent: 2em;
    line-height: 1.6;
    border-bottom: 1px solid #ddd;
    p.show5 {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      line-clamp: 5;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }

  .detail-tag {
    padding: 20px 0;
    border-bottom: 1px solid #ddd;
    h3 {
      font-size: 16px;
      margin-bottom: 10px;
    }
    ul li {
      float: left;
      padding: 3px 10px;
      margin-right: 10px;
      color: #333;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  .detail-like {
    padding: 20px 0;
    h3 {
      font-size: 16px;
      margin-bottom: 20px;
    }
    .like-list {
      display: flex;
      li {
        flex: 1;

      }
    }
  }

  .detail-con {
    margin-top: 50px;
    display: flex;
    padding: 10px;
    .detail-img {
      img {
        width: 70%;
      }
    }
    .detail-main {
      font-size: 17px;
      display: flex;
      flex-direction:column;
      justify-content: space-around;
    }
  }
  .read-btn {
    display: flex;
    > div {
      flex: 1;
      &:first-child {
        margin-right: 15px;
      }
      button {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 33px;
        line-height: 33px;
        font-size: 15px;
        vertical-align: middle;
        border: none;
        border-radius: 3px;
      }
      &:first-of-type {
        button {
          background-color: #ed424b;
          a {
            color: #fff;
          }
        }
      }
      &:nth-child(2) {
        button {
          color: #333;
          background-color: #fff;
          border: 1px solid #ddd;
        }
      }
    }
  }
</style>
