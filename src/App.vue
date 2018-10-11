<template>
  <div>
    <nav class="navbar fixed-top navbar-expand-lg">
      <header class="container">
        <div class="logo-container">
          <i class="fab fa-youtube youtube"></i>
          <router-link to="/" class="navbar-brand link">
            <h5 class="logo">YouTube</h5>
          </router-link>
        </div>
        <form @submit.prevent="search(searchTerm)" class="search--container">
          <input type="text" class="search--input" placeholder="Search" v-model="searchTerm">
          <button class="search--button"><i class="fas fa-search search--icon"></i></button>
        </form>
      </header>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import { mapActions } from "vuex"

export default {
  name: "App",
  data() {
    return {
      searchTerm: "",
    }
  },
  methods: mapActions(["search"])
}
</script>

<style>
  body {
    background: #FAFAFA;
  }

  input {
    outline-width: 1px;
  }
</style>


<style scoped>
  nav {
    background: #fff;
  }

  form {
    margin: 0 auto;
    width: 50%;
  }

  .logo-container {
    display: flex;
    align-items: center;
  }

  .logo {
    color: #000;
  }

  .link {
    margin-top: 8px;
    margin-left: 2px;
    text-decoration: none;
  }

  .search--container {
    display: flex;
  }

  .search--button, .search--input {
    padding: 3px;
    border: .5px solid #D3D3D3;
  }

  .search--input {
    width: 75%;
    border-radius: 3px 0px 0px 3px;
    outline-color: #1D62B9;
    outline-width: 3px;
  }

  .search--button {
    width: 12%;
    cursor: pointer;
    background: #F8F8F8;
    color: #848484;
    border-radius: 0px 3px 3px 0;
  }

  .search--button:hover {
    background: #F0F0F0;
  }

  .youtube {
    color: #FF0000;
    font-size: 22px;
  }
</style>

