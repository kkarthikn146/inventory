let myMixin = {
    data() {
        return {
            name: "jane",
            email : "jane@gmail.com"
        }
    },
    methods : {
        hello() {
            alert('hello from mixin!')
        },
        greet() {
            alert("good evening")
        }
    }
}

export { myMixin }