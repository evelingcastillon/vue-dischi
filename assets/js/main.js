const app = new Vue ({
    el : '#app',
    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        songs: '',
        errors: null
    },
    methods: {},
    mounted() {
        axios
        .get(this.url)
        .then(resp => {
            this.songs = resp.data.response;
            console.log(resp.data.response);
        })
        .catch( e => {
            console.error(e);
            this.errors = 'Sorry could no connect to the API' + e
        })
    }

})