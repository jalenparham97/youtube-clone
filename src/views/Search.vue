<template>
  <div>
    <ul>
      <li v-for="video in videos" :key="video.etag" class="media" @click="getVideo(video)">
        <img class="mr-3" :src="video.snippet.thumbnails.medium.url" alt="Video Thumbnail Image">
        <div class="media-body">
          <h6 class="video-title">{{ video.snippet.title }}</h6>
          <p class="channel-title">{{ video.snippet.channelTitle }}</p>
          <p class="description">{{ video.snippet.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Search",
  computed: mapGetters(["videos"]),
  methods:  mapActions(["getVideo"])
}
</script>

<style scoped>
  ul {
    margin-top: 100px;
  }

  li {
    margin: 15px;
  }

  img {
    width: 246px;
    height: 137px;
  }

  img:hover {
    cursor: pointer;
  }

  .channel-title {
    margin-bottom: 5px;
    font-size: 13px;
  }

  .video-title {
    margin-bottom: 1px;
    font-size: 18px;
  }

  .description {
    font-size: 13px;
    width: 70%;
  }
</style>
