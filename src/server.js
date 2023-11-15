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
                    btnText: 'Read more',
                    aside: {
                        title: "New",
                        articles: [
                            {
                                title: 'Hydrogen VS Electric Cars',
                                text: 'Will hydrogen-fueled cars ever catch up to EVs?'
                            },
                            {
                                title: 'The Downsides of AI Artistry',
                                text: 'What are the possible adverse effects of on-demand AI image generation?'
                            },
                            {
                                title: 'Is VC Funding Drying Up?',
                                text: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
                            }
                        ]
                    },
                    cards: [
                        {
                            imgURL: './images/cards/image-retro-pcs.jpg',
                            title: 'Reviving Retro PCs',
                            text: 'What happens when old PCs are given modern upgrades?'
                        },
                        {
                            imgURL: './images/cards/image-top-laptops.jpg',
                            title: 'Top 10 Laptops of 2022',
                            text: 'Our best picks for various needs and budgets.'
                        },
                        {
                            imgURL: './images/cards/image-gaming-growth.jpg',
                            title: 'The Growth of Gaming',
                            text: 'How the pandemic has sparked fresh opportunities.'
                        }
                    ]
                }
            }
        })
    }
})