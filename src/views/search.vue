<template>
  <div>
    <div class="search-box">
      <div class="search-text" @click="back">
        返回
      </div>
      <input class="search" type="text" placeholder="搜索" v-model="value"/>
      <div class="search-text" @click="search">
        搜索
      </div>
    </div>


    <div class="book-list">
      <ul>
        <li v-for="item in datalist">
          <router-link :to="{ path: '/bookdetail/' + item.id}" @click.native="bookDetailId(item.id)">
            <div class="book-image">
              <img :src="item.images" alt="">
            </div>
            <div class="book-detail">
              <h3>{{item.name}}</h3>
              <p>{{item.intro}}</p>
              <div class="author">
                <i></i>
                <span>{{item.author}}</span>
              </div>
              <div class="category-r">
                <span>{{item.type}}</span>
                <span>{{item.serialize}}</span>
                <span>{{item.wordcount}}万字</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <loading v-show="loading"></loading>
  </div>



</template>


<script>
  import { Search } from 'mint-ui';
  import loading from './../components/Loading/Loading.vue';

  export  default {
    data(){
      return{
        value:'',
        datalist:[],
        booklist:[],
        loading:false,
      }
    },
    components:{
      loading
    },
    methods:{
      search(){
        this.loading=true;
        this.datalist = [];
       this.booklist=this.$store.state.booklist;
       this.booklist.forEach((item,index)=>{
         if (item.name==this.value||item.author==this.value){
           this.datalist.push(item);
         }
       })
        this.loading=false;

      },
      back(){
        this.$router.go(-1);
      },
      bookDetailId(){
        
      }
    },
    watch:{
      datalist(val, oldVal){
        return val;
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .search-box {
    display: flex;
    background: #D9D9D9;
    align-items: center;
    height: 54px;
    .search {
      width: 80%;
      height: 30px;
      border: none;
      padding-left: 15px;
    }
    .search-text {
      height: 54px;
      width: 10%;
      font-size: 16px;
      line-height: 54px;
      color: #BD241C;
      text-align: center;
    }
    .book-list {
      margin-top: 15px;
      padding: 15px;
      background-color: #fff;
      ul li {
        display: flex;
        padding-bottom: 10px;
        margin-bottom: 14px;
        border-bottom: 1px solid #ddd;
        &:last-of-type {
          border-bottom: none;
        }
        a {
          display: flex;
        }
        .book-image {
          width: 80px;
          img {
            width: 100%;
          }
        }
        .book-detail {
          position: relative;
          flex: 1;
          padding: 0;
          margin-left: 20px;
          h3 {
            font-size: 18px;
            margin-bottom: 10px;
          }
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            line-clamp: 2;
            font-size: 14px;
            color: #969ba3;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .author {
            position: absolute;
            left: 0px;
            bottom: 5px;
            color: #969ba3;
            font-size: 13px;
            i {
              position: relative;
              bottom: -3px;
              display: inline-block;
              width: 16px;
              height: 16px;
              background: url("./../assets/images/man.png") no-repeat;
            }
          }
          .category-r {
            position: absolute;
            right: 0;
            bottom: 5px;
            float: right;
            color: #969ba3;
            font-size: 10px;
            span {
              border: 1px solid #ccc;
              border-radius: 2px;
              padding: 0 2px;
            }
            span:nth-child(2) {
              color: #ed424b;
            }
            span:nth-child(3) {
              color: #4284ed;
            }
          }
        }
      }
    }
  }
</style>
