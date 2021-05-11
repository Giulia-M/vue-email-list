new Vue({
    el: "#app",
    data: {
        emailLista: []
    },
    methods: {
        loadEmail() {
            const loopTimes = 10
            const ajaxList = []


            for (let index = 0; index < loopTimes; index++) {

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {

                        ajaxList.push(resp.data.response)
                        //  console.log(resp.data.response)
                        //  debugger

                        if (ajaxList.length === loopTimes) {
                            this.emailLista.push(...ajaxList)

                        }
                    })
            }
        }
    },
    mounted() {

    }
})
