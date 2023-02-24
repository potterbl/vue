<template>
  <div class="menu__item">
    <div class="menu__wrapper">
      <img src="../assets/logo.png" alt="logo" @click="$router.push(`/`)" />
      <ul class="list__item">
        <li v-for="list in NavList" :key="list.index" :class="list.page">
          {{ list.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-header",
  data() {
    return {
      NavList: [
        { title: "Home", index: 1, page: "Home" },
        { title: "What We Do", index: 2, page: "WhatWeDo" },
        { title: "Service", index: 3, page: "Service" },
        { title: "Project", index: 4, page: "Project" },
        { title: "Blog", index: 5, page: "Blog" },
        { title: "Contact", index: 6, page: "Contact" },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      const scrollHome = document.querySelector(".Home");
    const scrollWhatWeDo = document.querySelector(".WhatWeDo");
    const scrollService = document.querySelector(".Service");
    const scrollProject = document.querySelector(".Project");
    const scrollBlog = document.querySelector(".Blog");
    const scrollContact = document.querySelector(".Contact");

    const targetHome = document.querySelector("#targetHome");
    const targetWhatWeDo = document.querySelector("#targetWhatWeDo");
    const targetService = document.querySelector("#targetService");
    const targetProject = document.querySelector("#targetProject");
    const targetBlog = document.querySelector("#targetBlog");
    const targetContact = document.querySelector("#targetScroll");

    scrollHome.addEventListener("click", () => {
      targetHome.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
    scrollWhatWeDo.addEventListener("click", () => {
      targetWhatWeDo.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
    scrollService.addEventListener("click", () => {
      targetService.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
    scrollProject.addEventListener("click", () => {
      targetProject.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
    scrollBlog.addEventListener("click", () => {
      targetBlog.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
    scrollContact.addEventListener("click", () => {
      targetContact.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    });
    }, );
    
  },
};
</script>

<style>
.menu__item {
  display: flex;
  position: fixed;
  width: 100vw;
  top: 0;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 2;
}
.menu__wrapper {
  width: calc(100vw - 240px);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list__item {
  display: flex;
  justify-content: center;
}

.list__item li {
  list-style-type: none;
  padding: 0 15px;
  font-weight: 600;
}
</style>
