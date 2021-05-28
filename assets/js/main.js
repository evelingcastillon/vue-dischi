const app = new Vue ({
    el : '#app',
    data: {
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        songs: []
    },
    methods: {},
    mounted() {
        axios
        .get(this.url)
        .then(resp => {
            this.songs.push(resp.data.response);
        })
    }

})