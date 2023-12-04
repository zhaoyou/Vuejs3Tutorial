const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: 'The Final Empire',
            author: 'Brandon sanderson',
            age: 45,
            books: [
                {'title': 'xxx', 'author': 'sssss', 'img': 'assets/a.jpeg'},
                {'title': 'xxx', 'author': 'sssss', 'img': 'assets/b.jpeg'},
                {'title': 'xxx', 'author': 'sssss', 'img': 'assets/c.jpeg'}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
}).mount('#app')