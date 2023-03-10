const { createApp } = Vue;

createApp({
    data() {
        return {
            mails: [],
        }
    },
    mounted() {
        /* api + risposta con ciclo for */
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    this.mails.push(result.data.response)
                })
        }
    }

}).mount('#app');