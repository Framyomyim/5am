<template>
  <div class="home">
    <header>
      <div>
        <span class="brand">5AM</span>
      </div>
      <div>
        <button type="button" class="profile-dropdown" v-on:click="show">
          <img :src="myprofile" class="profile">
        </button>

        <div class="dropdown" v-if="isShow">
          <router-link to="">Profile</router-link>
          <router-link to="">Messages</router-link>
          <router-link to="">Logout</router-link>
        </div>
      <span v-else></span>
      </div>
    </header>
  </div>
</template>

<script>
import db from '@/db.js'

export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    show() {
      this.isShow = !this.isShow;
    }
  },
  created: () => document.title = '5AM - Lineup',
  data() {
    return {
      myprofile: null,
      isShow: false
    }
  },
  mounted() {
    db.collection('users').doc(localStorage.getItem('logged_in'))
      .get()
      .then(doc => {
        let data = doc.data();
        this.myprofile = data.profile;
      });
  }
}
</script>

<style scoped>
  .home {
    position: fixed;
    overflow-y: hidden;
    width: 100%;
    height: 100vh;
    background: #fff;
    top: 0;
    left: 0;
    color: #444;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #0062FF;
    padding: 20px 15px;
    color: #fff;
  }

  .brand {
    color: #fff;
    border: 2px solid #fff;
    padding: 5px 10px;
    background: rgba(255, 255, 255, 0.15);
    font-weight: 600;
  }

  .profile-dropdown {
    position: relative;
    outline: 0;
    border: 0;
    background: transparent;
  }

  .profile {
    position: relative;
    width: auto;
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 100px;
  }

  .profile-dropdown:hover {
    opacity: .8;
    cursor: pointer;
  }

  .dropdown {
    display: block;
    position: absolute;
    z-index: 111;
    background: #fff;
    border-radius: 8px;
    padding: 15px;
    color: #222;
    right: 20px;
    width:  250px;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.15);
  }

  .dropdown a {
    display: block;
    text-decoration: none;
    color:#0062FF;
    padding: 8px 6px;
  }

  .dropdown a:hover {
    background: #eee;
    border-radius: 9px;
  }
  
</style>