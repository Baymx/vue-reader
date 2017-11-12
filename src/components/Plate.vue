<template>
  <div class="recommend">
    <h2 class="title">{{title}}</h2>
    <div class="list">
      <ul class="list-ul">
        <li class="list-li" v-for="(item,index) in bookdata">

          <router-link :to="{ path: '/bookdetail/' + item.id}" @click.native="bookDetailId(item.id)">
            <img :src="item.images" alt="" @error="loadImage($event)">
            <p class="book-name">{{item.name}}</p>
            <p class="book-author">{{item.author}}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="change" @click="changeBook">
      <img src="./../assets/images/freshen.png" alt="">
      <span>換一批</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        count:0,
      }
    },
    props: ['booklist', 'title'],
    computed:{
      bookdata(){
        return this.booklist.slice(this.count*8,(this.count+1)*8);
      }
    },
    methods: {
      bookDetailId(id) {
        this.$store.dispatch('chooseBook', id)
//        console.log(id)
      },
      loadImage(e) {
        this.common.defaultImage(e)
      },
      changeBook(){
        this.count++;
        if(this.count>=5){
          this.count=0;
        }
      }
    }
  }
</script>

<style lang="less" type="text/less">
  .recommend {
    padding: 15px 0;
    margin-bottom: 15px;
    background-color: #fff;
    .title {
      margin-left: 15px;
      margin-bottom: 10px;
      border-left: 2px solid #ed424b;
      text-indent: 5px;
      font-size: 16px;
      line-height: 16px;
    }
    .list {
      .list-ul {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap:wrap;
        .list-li {
          display: inline-block;
          margin-right: 8px;
          width: 21%;
          img {
            width: 100%;
            height:125px;
          }
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .change{
      height: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      img{
        display: block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
  }
</style>

