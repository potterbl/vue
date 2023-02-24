<template>
    <content-container>
        <div class="newsletter" id="targetScroll" ref="newsLetter">
            <div class="newsletter__background" :style="animationBack">
            </div>
            <div class="newsletter__form">
                <div class="form__text" :style="animationText">
                    <h1>Subscribe Newsletter</h1>
                    <p>I will update good news and promotion service not spam</p>
                </div>
                <div class="form__contact" :style="animationForm">
                    <input
                    v-model="newMail"
                    @input="mailChanged"
                    placeholder="Enter your email..."
                    />
                    <btn-contact
                    @click="showDialog"
                    />
                </div>
            </div>
        </div>
    </content-container>
    
    <contact-dialog 
    :show="dialogVisible" 
    :childValue="childValue" 
    @update:show="dialogVisible = $event" />

</template>

<script>
    export default {
        
        data() {
            return {
                dialogVisible: false,
                animationForm: {
                    transform: 'translate(0, 100px)',
                    transition: 'all .5s ease-in-out'
                },
                animationText: {
                    transform: 'translate(-100px, 0)',
                    transition: 'all .6s ease-in-out'
                },
                animationBack: {
                    transform: 'translate(100px, 0)',
                    transition: 'all .5s ease-out'
                }
            } 
        },
        props: {
            childValue: String,
        },
        name: 'news-letter',
        methods: {
            showDialog() {
                this.dialogVisible = !this.dialogVisible
            },
            mailChanged(){
                this.$store.commit('mailNew', this.newMail)
            },
            handleScroll() {
                const el = this.$refs.newsLetter;
      const rect = el.getBoundingClientRect();
      if (rect.bottom <= window.innerHeight) {
                    this.animationBack.transform = 'translate(0, 0)'
                    this.animationText.transform = 'translate(0, 0)'
                    this.animationForm.transform = 'translate(0, 0)'
                }
            }
        },
    mounted() {
        window.addEventListener('scroll', this.handleScroll)
    }
    }
</script>

<style scoped>
.newsletter{
    margin: 40px 38px;
    background-color: #F4F9FF;
    width: 100%;
    height: 292px;
    border-radius: 5rem;
    display: flex;
    justify-content: flex-end;
    position: relative;
    margin-top: 150px;
}
.newsletter__background{
    width: 495px;
    height: 100%;
    border-radius: 5rem;
    background-color: blue;
    border-start-start-radius: 10rem;
    border-end-start-radius: 20rem;
}
.newsletter__form{
    white-space: nowrap;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    width: auto;
}
.newsletter__form h1{
    margin: 0;
}
.newsletter__form p{
    margin: 0;
}
.form__text{
    font-size: 1.8rem;
    align-self: center;
}
.form__contact{
    border-radius: 5rem;
    padding: 10px;
    padding-left: 35px;
    margin-left: 50px;
    display: flex;
    align-items: center;
    background: #fff;
}

input{
    border: 0;
    width: 190px;
}
input:focus{
    outline: none;
}
</style>