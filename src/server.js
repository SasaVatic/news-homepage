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
                }
            }
        })
    }
})