import axios from "axios";

export default {
    state: {
        photoInfo: []
    },
    getters: {
        getPhotoInfo: (state) => {
            return state.photoInfo
        }
    },
    mutations: {
        setPhotoInfo: (state, data) => {
            state.photoInfo = data;
        }
    },
    actions: {
        initPhotoInfo: ({commit}) => {
            axios.get('https://jsonplaceholder.typicode.com/photos/?_limit=10')
                .then(response => commit('setPhotoInfo', response.data))
        }
    },
}