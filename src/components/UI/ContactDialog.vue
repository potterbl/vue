<template>
  <transition name="fade">
    <div class="contact__dialog" v-if="show === true" @click="hideDialog">
      <div class="dialog__wrapper">
        <div class="dialog" @click.stop>
          <div class="has__mail" v-if="hasLetters($store.state.mail)">
            <h3>{{$store.state.mail}}</h3>
            <div class="incorrect__mail">
              <p>Right?</p>
              <p style="color: red"
              @click="hideDialog"
              >No</p>
            </div>
          </div>
          <contact-input v-else />
          <button class="submit" @click="sentRequest">Submit</button>
        </div>
        <transition name="fade">
          <div class="sent" v-if="request === true">
            <h2>Your request sent</h2>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "contact-dialog",
  data() {
    return {
      request: false,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    childValue: String,
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
    sentRequest() {
      this.request = !this.request;
      setTimeout(() => {
        this.$emit("update:show", false);
        this.request = !this.request;
      }, 1000);
    },
    updateParentValue(value) {
      this.parentValue = value;
    },
    hasLetters(str) {
      return /[a-zA-Z]/.test(str);
    },
  },
};
</script>

<style scoped>
.contact__dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  font-size: 1.6rem;
}
.dialog__wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 2.5rem;
}
.submit{
  width: 200px;
  height: 50px;
  background-color: blue;
  border-radius: 2.5rem;
  color: white;
  border: 0;
  cursor: pointer;
}
.has__mail{
  width: 80%;
  line-break: anywhere;
  text-align: center;
}
.incorrect__mail{
  margin-left: 45px;
  display: flex;
}
.incorrect__mail p:last-child{
  margin-left: 10px;
  cursor: pointer;
}
.sent {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 2.5rem;
}

input {
  border: 0;
  width: 190px;
}
input:focus {
  outline: none;
}

.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
