<template>
    <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item">
              <a class="nav-link disabled" href="">Your Feed</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="">Global Feed</a>
            </li>
          </ul>
        </div>

        <div 
          class="article-preview" 
          v-for="article in articles"
          :key="article.slug"
        >
          <div class="article-meta">
            <a href="profile.html"><img :src="article.author.image" /></a>
            <div class="info">
              <a href="" class="author">{{ article.author.username }}</a>
              <span class="date">{{ article.createdAt }}</span>
            </div>
            <button class="btn btn-outline-primary btn-sm pull-xs-right">
              <i class="ion-heart"></i> {{ article.favoritesCount }}
            </button>
          </div>
          <router-link href="" class="preview-link" :to="`/article/${article.slug}`">
            <h1>{{ article.title }}</h1>
            <p>{{ article.description }}</p>
            <span>Read more...</span>
          </router-link>
        </div>

      </div>

      <div class="col-md-3">
        <!-- 标签列表 -->
        <tag-list />
      </div>

    </div>
  </div>

</div>
</template>

<script>
import {getArticles} from '@/api/article'
import TagList from './components/tag-list.vue'

export default {
  name:'HomeIndex',
  components:{
    TagList
  },
  data(){
    return {
      articles:[]
    }
  },
  
  created(){
    //生命周期管理
    this.loadArticles()
  },

  methods:{
    /* async/await 是ES6新增的异步流程控制方法，可以让你的异步代码编写的更简洁 */
    async loadArticles(){
      const res = await getArticles()
      this.articles = res.data.articles
      console.log(res.data.articles)
    }
  }
}
</script>