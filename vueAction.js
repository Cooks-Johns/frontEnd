const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: ' If you want to change this in the js console use mountedApp.product just replace product with the object you want to manipulate. ',
            image: './assets/images/socks_green.jpg',
            url: 'https://vuejs.org/v2/guide/#Getting-Started',
            inventory: 100,
            onSale: true
            
        }
    }
})
