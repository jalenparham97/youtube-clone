<template>
  <div class="watch--container">
    <div v-if="video" class="col-md-7 iframe">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe :src="videoUrl" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="details">
        <h5 class="mt-3">{{ video.snippet.title }}</h5>
        <p>{{ video.snippet.description }}</p>  
      </div>
    </div>

    <!-- <ul class="list-container col-md-5">
      <li class="media mb-2" v-for="video in videos" :key="video.etag" @click="getVideo(video)">
        <img class="mr-3" :src="video.snippet.thumbnails.default.url" alt="Video Thumbnail Image">
        <h6 class="media-body">{{ video.snippet.title }}</h6>
        <div class="options" id="options">
          <i class="fas fa-ellipsis-v"></i>
        </div>
      </li>
      <li class="media"><button @click="getMoreVideos" class="btn">More</button></li>
    </ul> -->
    <li class="media"><button @click="getMoreVideos" class="btn">More</button></li>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: "Watch",
  computed: {
    ...mapGetters(["video", "videos"]),
    
    videoUrl() {
      const { videoId } = this.video.id
      return `https://www.youtube.com/embed/${videoId}`;
    }
  },
  methods: {
    ...mapActions(["getVideo", "getMoreVideos"])
  },
  created() {
    console.log(this.video.id.videoId)
  }
}
</script>

<style scoped>
  .watch--container {
    display: flex;
    margin-top: 100px;
  }

  li {
    display: flex;
    cursor: pointer;
  }

  img {
    width: 168px;
    height: 98px;
  }

  h6 {
    font-size: 14px;
  } 

  button {
    width: 100%;
    background: #F8F8F8;
    color: #848484;
  }

  button:hover {
    background: #F0F0F0;
  }
</style>
