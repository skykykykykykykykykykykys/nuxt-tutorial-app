<template>
  <div class="mt-5">
    <div class="container">
      <div class="row justify-content-md-center">
        <div v-if="article" class="col-8">
          <p>{{ article[source].name }}</p>
          <img :src="article.urlToImage" alt="Card image cap" class="img-fluid">
          <p class="card-text"><small class="text-muted">{{ article.publishedAt }} - {{ article.author }} -</small></p>
          <h5 class="card-title">{{ article.title }}</h5>
          <p class="card-text">{{ article.description }}</p>
        </div>
        <div v-else>
          <p>{{ article.source.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    article () {
      return this.$store.getters.article
    }
  }
}
</script>
