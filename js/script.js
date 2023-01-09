const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            email:'',
        }
    },
    mounted() {
        /* api + risposta con ciclo for */
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((result) => {
                    this.email = result.data.response;
                    this.emails.push(this.email); 

                });
        }
    }

}).mount('#app');