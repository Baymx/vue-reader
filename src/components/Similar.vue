<<template>
  <div class="similar" @click="toBookDetail(bookDetail.id)">
    <div class="similar-img">
      <img :src="bookDetail.images" @error="loadImage($event)">
    </div>
    <p>{{bookDetail.name}}</p>
  </div>
</template>

<script>
  import  axios from  'axios';
  export default {
    data(){
      return {
        bookDetail:{}
      }
    },
    props: {
      like: {
        type: String,
        required: true
      }
    },
    created(){
      this.getBookData(this.like);
    },
    methods: {
      loadImage(e) {
        this.common.defaultImage(e)
      },
      getBookData(id){
        console.log(this.like)
        axios.get(`${this.common.api}/booklist?id=${id}`).then((res) => {
          this.bookDetail = res.data
        })
      },
      toBookDetail(id) {
        this.$router.push({path: '/bookdetail/' + id})
        document.body.scrollTop = 0
      },
    },
    watch: {
      like(val, old) {
        this.getBookData(val)
      }
    }
  }
</script>



<style lang="less" type="text/less" scoped>
  .similar {
    width: 110px;
    height: 165px;
    .similar-img {
      height: 140px;
    }
    img {
      width: 100%;
      height: 100%;
      &[src=""] {
        opacity: 0;
      }
    }
  }
</style>

