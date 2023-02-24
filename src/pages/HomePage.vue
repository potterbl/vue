<template>
  <container>
    <content-main />
    <our-client />
    <help-business />
    <product-agency />
    <client-say />
    <news-letter />
    <main-footer />
    <copy-right />
  </container>
</template>

<script>
export default {
  props: {
    isHidden: Boolean,
  },
};
</script>

<style>
* p {
  color: #565656;
  font-family: "Source Sans Pro", sans-serif;
}
* h1 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
}
* h2 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
}
* h3 {
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 600;
}
* a {
  font-family: "Source Sans Pro", sans-serif;
}
* li {
  font-family: "Source Sans Pro", sans-serif;
}
</style>
