<template>
  <content-container>
    <div class="help__content" id="targetWhatWeDo">
      <div class="help__text" ref="test" :style="animationText">
        <h2>How can we help your Business ?</h2>
        <p>
          We build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
      </div>
      <div class="help__cards">
        <div
          class="card"
          v-for="(card, index) in cards"
          :key="index"
          :style="animationCard"
          ref="card"
        >
          <!-- :style="{ transform: 'translateY(' + getTranslateY(index) + 'px)' }" -->
          <div
            :style="{ 'background-color': card.background }"
            class="card__image"
          >
            <img :src="require(`@/assets/${card.image}`)" alt="" />
          </div>
          <h2>{{ card.title }}</h2>
          <p>{{ card.body }}</p>
        </div>
      </div>
    </div>
  </content-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Business Idea Planning",
          body: "We present you a proposal and discuss niffty-gritty like",
          image: "box-search.png",
          background: "#F1F7FF",
        },
        {
          title: "Financial Planning System",
          body: "Protocols apart from aengage models, pricing billing",
          image: "empty-wallet.png",
          background: "#FFF7E3",
        },
        {
          title: "Development Website and App",
          body: "Communication protocols apart from engagement models",
          image: "code-1.png",
          background: "#FFF2F8",
        },
        {
          title: "Market Analysis Project",
          body: "Protocols apart from aengage models, pricing billing",
          image: "chart-square.png",
          background: "#DEFFEE",
        },
      ],
      animationText: {
        transform: "translate(-100px, 0)",
        transition: "all .3s ease-out",
      },
      animationCard: {
        transform: "translate(0, 0)",
        transition: "all .6s ease-out",
      },
    };
  },
  name: "help-business",
  methods: {
    getTranslateY(index) {
      return index < this.cards.length / 2 ? "20" : "-20";
    },
    handleScroll() {
      const el = this.$refs.test;
      const rect = el.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
        this.animationText.transform = "translate(0, 0)";
        for (let i = 0; i < 4; i++) {
          const card = this.$refs.card[i];
          card.style.transform = `translateY(${
            i % 2 === 0 ? "20px" : "-20px"
          })`;
        }
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.help__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 130px;
}
.help__text {
  width: 396px;
}
.help__text p {
  font-size: 1.6rem;
}
.help__text h2 {
  font-size: 4rem;
}
.help__cards {
  display: grid;
  grid-template-areas: "a b" "c d";
  grid-auto-flow: row;
  gap: 30px;
  margin-right: 48px;
}
.card {
  font-size: 1.6rem;
  width: 245px;
  padding: 57px 32px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  box-shadow: 0 0 10px 0 grey;
}

.card__image {
  width: 121px;
  height: 121px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3rem;
}
</style>
