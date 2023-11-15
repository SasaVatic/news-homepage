import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = "api"

        this.get("/page", () => {
            return {
                navigation: {
                    links: [
                        { label: 'Home', href: '#' },
                        { label: 'New', href: '#' },
                        { label: 'Popular', href: '#' },
                        { label: 'Trending', href: '#' },
                        { label: 'Categories', href: '#' }
                    ]
                },
                hero: {
                    title: 'The Bright Future of Web 3.0?',
                    text: 'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
                    btnText: 'Read more'
                }
            }
        })
    }
})