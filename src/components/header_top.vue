<template>
<div class="header__top">
  <div class="container">
    <div class="headerDisplayFlex">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="logo">
      </router-link>
      <div class="links">
        <ul>
        <li>
          <router-link to="/">Asosiy</router-link>
        </li>
        <li>
          <router-link to="/xizmatlar">Xizmatlar</router-link>
        </li>
        <li>
          <router-link to="/biz_haqimizda">Biz haqimizda</router-link>
        </li>
        <li>
          <router-link to="/aloqa">Aloqa</router-link>
        </li>
        <li>
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
      </ul>
      </div>
      <div class="langs">
       <div class="lang">
         <span class="uz_lang">Uz</span>
         <span class="ru_lang">Ru</span>
       </div>
       <img class="btnLang" src="../assets/img/vertual/lang.png" alt="lang">
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>