<template>
  <content-container>
    <div class="client__content">
      <div class="text__wrapper" ref="textArea" :style="textAnimation">
        <h1>Our Client</h1>
        <p>Several selected clients, who already believe in our service.</p>
      </div>
      <img
        src="@/assets/logotypes/GoogleLogo.png"
        alt="GoogleLogo"
        :style="googleAnimation"
      />
      <img
        src="@/assets/logotypes/Vector.png"
        alt="Vector"
        :style="airAnimation"
      />
      <img
        src="@/assets/logotypes/UberEatsLogo.png"
        alt="UberEatsLogo"
        :style="uberAnimation"
      />
      <img
        src="@/assets/logotypes/AmazonLogo.png"
        alt="AmazonLogo"
        :style="amazonAnimation"
      />
    </div>
  </content-container>
</template>

<script>
export default {
  name: "our-client",
  data() {
    return {
      textAnimation: {
        transition: "all .3s ease",
        transform: "translate(-100px, 0)",
      },
      googleAnimation: {
        transition: "all .3s ease",
        transform: "translate(0, 50px)",
      },
      airAnimation: {
        transition: "all .3s ease",
        transform: "translate(0, 50px)",
      },
      uberAnimation: {
        transition: "all .3s ease",
        transform: "translate(0, 50px)",
      },
      amazonAnimation: {
        transition: "all .3s ease",
        transform: "translate(0, 50px)",
      },
    };
  },
  methods: {
    handleScroll() {
      const el = this.$refs.textArea;
      const rect = el.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        this.textAnimation.transform = "translate(0, 0)";
        this.googleAnimation.transform = "translate(0, 0)";

        setTimeout(() => {
          this.airAnimation.transform = "translate(0, 0)";

          setTimeout(() => {
            this.uberAnimation.transform = "translate(0, 0)";

            setTimeout(() => {
              this.amazonAnimation.transform = "translate(0, 0)";
            }, 100);
          }, 100);
        }, 100);
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.client__content {
  margin-top: 136px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.text__wrapper {
  font-size: 1.8rem;
  width: 336px;
}
</style>
