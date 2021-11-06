app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">

        <!-- MYTH
          -->
        <img 
        :class="{ 'out-of-stock-img': !inStock }"
        v-bind:src="image">
      </div>
      <div class="product-info">
        <h2>{{ title }}</h2>
        <h4>{{ saleMessage }}</h4>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        // <ul>
        //   <li v-for="detail in details">{{ detail }}</li>
        // </ul>
        <product-display :details="details"></product-display>


        <!-- MYTH
         .color-circle: in css file 50/50 circle --
        variant.color: 
          using this will display only the color name 
          by binding backgroundColor: with the style attribute we are able
          to style the variant div to display the color/style of our css/js of that iteration
        :class="[isActive ? activeClass : '']"
        UpdateVariant(index) 
          when the mouse overevent happens will will trigger the new method 
          to get the index we will pass it into the v-for --
           This is another way to add a event Listner the key looks at the id and 
            upon the mouseOver event  --
      -->
        <div v-for="(variant, index) in variants" 
        :key="variant.id" 
        @mouseover="UpdateVariant(index)"
        class="color-circle" 
        :class="[isActive ? activeClass : '']" 
        :style="{ backgroundColor: variant.color }">
        <!-- {{ variant.color }} -->
      </div>

        <!-- MYTH
          When adding a event listener use the v-on: and when the event happens the 
             method will call on addToCart with run 
          :disabled="!inStock" - user cannot add to cart if inventory is zero
          :class="{ disabledButton: !inStock }" - Using the shorthand for vbind on the
             class object we are able to Greys out our button when out of stock
             -- test mountedApp.inStock = true
        -->
        <button 
        class="button" 
        :class="{ disabledButton: !inStock }" 
        :disabled="!inStock"
        v-on:click="addToCart">
          Add to Cart
        </button>

        <!-- MYTH
          This does the same as the button above but removes and item from the cart but
             with the use of the @ does the same as v-on:click -->
        <button 
        class="button" 
        @click="removeFromCart">
          Remove item
      </button>
      </div>
    </div>
  </div>`,
  data() {
    return {
        myStore:'Flash Sale',
        product: 'Socks',
        brand: 'Cookie Cutters',
        selectedVariant: 0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        activeClass: true,


        // Lets you toggle between differen 
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 2 },
        ],
        // In the future think of how to only trigger 
        //on sale when inventory is low or on sale for early users
        onSale: true
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
    UpdateVariant(index) {
        this.selectedVariant = index
       
    }
},
computed: {
    title () {
        return this.brand + ' ' + this.product
    },
    image() {
        return this.variants[this.selectedVariant].image
    },
    inStock() {
        return this.variants[this.selectedVariant].quantity
    },
    saleMessage() {
        if (this.variants[this.selectedVariant].quantity <= 5) {
            return this.myStore + ' ' + this.product + ' are on sale!'
        }
        return ''
    },
    shipping() {
        if (this.premium) {
            return 'Free'
        }
        return 2.99
    }
}
})