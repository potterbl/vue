import { createStore } from 'vuex'

const store = createStore({
    state() {
        return{
            mail: ''
        }
    },
    mutations: {
        mailNew(state, newMail) {
            state.mail = newMail
        },
    }
})

export default store;