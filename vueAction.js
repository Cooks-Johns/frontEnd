const app = Vue.createApp({
    data() {
        return {
            myStore:'Flash Sale',
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inStock: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            activeClass: true,

            
            // Lets you toggle between differen 
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if(this.cart >= 1)
            this.cart -= 1
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})