<template>
  <div class="container">
    <div class="navbar-container">
      <div class="nav-header">
        <p class="nav-header--text">List Music</p>
      </div>
      <!-- list music  -->
      <div class="footer-menu">
          localhost:3000/server
      </div>
    </div>
    <div class="body-container">
    <!-- youtube -->
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: 'Server'
      }
    }
  }
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100vh;
    background-color: #EEF1F6;
  }
  .navbar-container {
    width: 250px;
    height: 100%;
    float: left;
  }
  .body-container {
    height: 100%;
    background-color: #f9f9f9;
    overflow-y: scroll;
    padding: 10px 40px;
  }
  .footer-menu {
    position: absolute;
    bottom: 0px;
    padding-top: 8px;
    border-top: 1px solid #e8e9ed;
  }
  .footer-menu .languagebar {
    padding: 10px;
  }
  .footer-menu .user-container {
    width:250px;
    padding: 1px 6px;
    font-size: 13px;
  }
  .footer-menu .btn-logout {
    font-size: 17px;
    color: #000;
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
</style>
