<template>
  <content-container style="margin-top: 100px;">
    <hr>
    <div class="footer">
      <div class="footer__about">
        <img src="@/assets/logo.png" alt="" />
        <p>Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</p>
      </div>
      <div class="footer__links">
        <ul>
          <h2>What We Do</h2>
          <li v-for="(link, index) in linksWWD" :key="index">
            <a href="">{{ link }}</a>
          </li>
        </ul>
        <ul>
          <h2>Company</h2>
          <li v-for="(link, index) in linksC" :key="index">
            <a href="">{{ link }}</a>
          </li>
        </ul>
        <ul>
          <h2>Support</h2>
          <li v-for="(link, index) in linksSup" :key="index">
            <a href="">{{ link }}</a>
          </li>
        </ul>
        <ul>
          <h2>Contacts</h2>
          <li v-for="(link, index) in linksCont" :key="index">
            <a href="">{{ link }}</a>
          </li>
        </ul>
      </div>
      <div class="links__media">
        <a href=""><img src="@/assets/facebook.png" alt=""></a>
        <a href=""><img src="@/assets/twitter.png" alt=""></a>
        <a href=""><img src="@/assets/linkedin.png" alt=""></a>
      </div>
    </div>
    <hr>
  </content-container>
</template>

<script>
export default {
  name: "main-footer",
  data() {
    return {
      linksWWD: ["Web Design", "App Design", "Social Media Manage", "Market Analysis Project"],
      linksC: ["About us", "Career", "Become Investor"],
      linksSup: ["FAQ", "Policy", "Business"],
      linksCont: ["WhatsApp", "Support 24"],
    };
  },
};
</script>

<style scoped>
content-container{
    margin-top: 100px;
}
.footer {
  width: 100%;
  display: grid;
  grid-template-areas: "a . b"
                       "c . .";
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 30px;
}
.footer__about{
    width: 270px;
    font-size: 1.4rem;
    grid-area: a;
}
.footer__links{
    display: flex;
    font-size: 1.4rem;
    grid-area: b;
}
.links__media{
    grid-area: c;
}
.footer__links ul{
    list-style-type: none;
    margin: 0 50px;
}
.footer__links a{
    text-decoration: none;
    color: black;
    line-height: 200%;
}
.footer__links h2{
    margin: 0;
}
.links__media a{
    margin-right: 16px;
}
</style>
