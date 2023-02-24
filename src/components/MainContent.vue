<template>
  <div class="main__content" id="targetHome">
    <div class="main__text">
      <h1>A Digital Product Agency</h1>
      <p>
        Leading digital agency with solid design and development expertise. We
        build readymade websites, mobile applications, and elaborate online
        business services.
      </p>
      <btn-contact @click="scrollToElement()" id="scrollBtn"/>
    </div>
    <img src="../assets/image8.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "content-main",
  methods: {
    scrollToElement() {
      this.$refs.scrollTarget.scrollIntoView();
    },
  },
  mounted() {
    const scrollTarget = document.querySelector('#targetScroll')
    const scrollBtn = document.querySelector('#scrollBtn')

    scrollBtn.addEventListener('click', () => {
        scrollTarget.scrollIntoView({
            block: 'center',
            behavior: 'smooth'
        })
    })
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  
};
</script>

<style>
.main__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: 92px;
}
.main__content img {
  width: 50%;
}
.main__text {
  padding: 0 110px;
  font-size: 1.6rem;
}
</style>
