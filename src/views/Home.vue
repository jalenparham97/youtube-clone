<template>
  <div>
    <ul class="videos--container container">
      <li v-for="video in videos" :key="video.etag" @click="getVideo(video)">
        <img :src="video.snippet.thumbnails.default.url" alt="">
        <p>{{ video.snippet.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Home",
  computed: mapGetters(["videos"]),
  methods: mapActions(["preLoadVideos", "getVideo"]),
  created() {
    this.preLoadVideos()
  }
}
</script>

<style scoped>
  .videos--container {
    margin-top: 100px;
    list-style: none;
    display: grid;
    grid-column-gap: 10px;
    grid-template-rows: auto auto auto auto auto;
    grid-template-columns: auto auto auto auto auto;  
  }

  li {
    cursor: pointer;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  img {
    width: 210px;
    height: 117px;
  }
</style>

