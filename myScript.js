new Vue({
    el: "#app",
    data: {
        emailLista: [],
        loopTimes: 10
    },
    methods: {
        loadEmail() {
            this.emailLista = []
    
            for (let index = 0; index < this.loopTimes; index++) {

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {

                        this.emailLista.push(resp.data.response)
                        //  console.log(resp.data.response)
                        //  debugger

                        // if (ajaxList.length === loopTimes) {
                        //     this.emailLista.push(...ajaxList)

                        // }
                    })

            }
          
        }
    },
    mounted() {

    }
})
