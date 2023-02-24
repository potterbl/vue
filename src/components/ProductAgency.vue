<template>
  <content-container>
    <div class="product__content" id="targetService">
      <img :style="imgAgency" src="@/assets/unsplash_bzqU01v-G54.png" alt="product" />
      <div class="text-container" ref="prodAgency" :style="animationText">
        <h1>Great Digital Product Agency since 2016</h1>
        <p>
          Our Business Plan is a written document describing a company's core
          business activites, Objectives, and how it plans to achieve its goals.
          Our goal is to provide our client high quality Product with modern
          idea accordingly their budgets and according thir reuirements.
        </p>
      </div>
    </div>
  </content-container>
</template>

<script>
export default {
  name: "product-agency",
  data() {
    return{
        animationText: {
        transform: "translate(0, 100px)",
        transition: "all .3s ease-out",
      },
      imgAgency: {
        transform: "translate(-100px, 0)",
        transition: "all .3s ease-out",
      }
    }
  },
  methods: {
    handleScroll() {
      const el = this.$refs.prodAgency;
      const rect = el.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        this.animationText.transform = "translate(0, 0)";
        this.imgAgency.transform = "translate(0, 0)";
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.product__content {
  margin-top: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text-container {
  font-size: 1.8rem;
  width: 535px;
}
</style>
