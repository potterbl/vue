<template>
    <content-container>
        <div class="client__content" id="targetProject">
            <h1 ref="clientSay" :style="animationText">What our happy client say</h1>
            <p ref="clientSay" :style="animationText">Several selected clients, who already believe in our service.</p>
            <div class="client__carusel">
                <div class="client__wrapper"
                >
                    <div class="client"
                    v-for="(client, index) in clients"
                    :key="index"
                    :style="{'transform': 'translateX(calc(-' + currentSlide * 100 + 'vw + ' + currentSlide * 250 + 'px))'}"
                    >
                        <div class="photo__client">
                            <img :src="client.photo" alt="">
                        </div>
                        <div class="client__text">
                            <h3>{{ client.name }}</h3>
                            <p>{{ client.text }}</p>
                        </div>
                    </div>
                </div>
                <div class="photo__flower" >
                    <img src="@/assets/Group71.png" alt="">
                </div>
            </div>
            <div class="carusel__btns">
                <button
                v-for="(button, index) in clients"
                :key="index"
                :class="{ active: currentSlide === index }"
                @click="switchSlide(index)"
                ></button>
            </div>
        </div>
    </content-container>
</template>

<script>
    export default {
        name: 'client-say',
        data() {
            return {
                clients: [
                    {id: '1', photo: 'https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=1600', name: 'Olivia Taylor', text: 'Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.'},
                    {id: '2', photo: 'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1600', name: 'Isabella Carter', text: "Thank you for your kind words! It was a pleasure working with you and I'm glad you're happy with the results. I strive to deliver high-quality work in a timely manner, so I'm thrilled to hear that I met your expectations. If you ever need anything in the future, please don't hesitate to reach out. Thanks again for your recommendation!"},
                    {id: '3', photo: 'https://images.pexels.com/photos/3936894/pexels-photo-3936894.jpeg?auto=compress&cs=tinysrgb&w=1600', name: 'Charlotte Reynolds', text: "Thank you for your kind words! It was a pleasure working with you and I'm glad you're happy with the results. I strive to deliver high-quality work in a timely manner, so I'm thrilled to hear that I met your expectations. If you ever need anything in the future, please don't hesitate to reach out. Thanks again for your recommendation!"},
                    {id: '4', photo: 'https://images.pexels.com/photos/2586339/pexels-photo-2586339.jpeg?auto=compress&cs=tinysrgb&w=1600', name: 'Matthew Paul', text: "Thank you for taking the time to share your feedback! I'm delighted to hear that you're impressed with the quality of the design and work, as well as the quick turnaround time. Providing exceptional service to my clients is my top priority, so I'm thrilled to have met your expectations. If you need anything in the future, please don't hesitate to let me know. Thanks again for your recommendation!"},
                    
                ],
                currentSlide: 0,
                animationText: {
                    transform: 'translate(-100px, 0)',
                    transition: '.3s'
                }
            }
        },
        methods: {
            switchSlide(index){
                this.currentSlide = index
                
            },
            handleScroll() {
                const el = this.$refs.clientSay
                const rect = el.getBoundingClientRect()
                if(rect.bottom <= window.innerHeight){
                    this.animationText.transform = 'translate(0, 0)'
                }
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>
.client__content{
    margin-top: 200px;
    overflow: hidden;
    text-align: center;
    font-size: 1.8rem;
    position: relative;
    min-height: 597px;
    width: 100%;
}
.client{
    width: calc(100vw - 240px);
    transition: all 1s ease;
    display: flex;
    justify-content: flex-start;
}
.client__wrapper{
    position: absolute;
    display: flex;
    margin-top: 75px;
}
.photo__client{
    width: 389px;
    height: 389px;
}

.photo__client img{
    width: 100%;
    height: 100%;
    border-top-left-radius: 20rem;
    border-end-start-radius: 20rem;
    border-end-end-radius: 20rem;
}
.client__text{
    text-align: start;
    width: 415px;
    margin: 0;
    align-self: center;
    margin-left: 150px
}
.photo__flower{
    position: absolute;
    bottom: 20px;
    right: 0;
}
.carusel__btns{
    display: flex;
    position: absolute;
    left: 535px;
    bottom: 0;
}
button{
    width: 15px;
    height: 15px;
    background-color: #E7F0FC;
    margin: 0 5px;
    border: 0;
    border-radius: 50%;
    cursor: pointer;
}
.active{
    background-color: #2639ED;
}

@media (max-width: 1555px){
    .photo__flower img{
        display: none;   
    }
}
</style>