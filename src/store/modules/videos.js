import router  from "../../router"
import axios from "axios"

const API_KEY = "AIzaSyAoMVn37vO_neC1SbSr_EKSUfMHM-hMY_M"

const state = {
  searchTerm: "",
  videos: [],
  video: {},
}

const getters = {
  videos: state => state.videos,
  video: state => state.video
}

const actions = {
  getVideo({ commit }, video) {
    commit("setVideo", video)
    router.push("/watch")
  },

  search({ commit }, searchTerm) {
    commit("setSearchTerm", searchTerm) 
    console.log(state.searchTerm)
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: API_KEY,
        type: "video",
        part: "snippet",
        maxResults: 10,
        q: state.searchTerm
      }
    }).then(response => {
      commit("setVideos", response.data.items)
      console.log(state.videos)
    })

    router.push(`/search/results/${state.searchTerm}`)
  },

  preLoadVideos({ commit })  {
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: API_KEY,
        type: "video",
        part: "snippet",
        maxResults: 25,
        regionCode: "US",
        q: "politics"
      }
    }).then(response => {
      commit("setVideos", response.data.items)
      console.log(state.videos)
    })
  },

  getMoreVideos({ commit }) {
    axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        key: API_KEY,
        type: "video",
        part: "snippet",
        maxResults: 10,
        regionCode: "US",
        q: state.searchTerm
      }
    }).then(response => {
      state.videos.push(response.data.items)
      console.log(state.videos)
    })
    console.log(state.searchTerm)
  } 
}

const mutations = {
  setVideos: (state, videos) => state.videos = videos,
  setSearchTerm: (state, searchTerm) => state.searchTerm = searchTerm,
  setVideo: (state, video) => state.video = video
}

export default {
  state, getters, actions, mutations
}
