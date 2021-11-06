app.component('product-details', {
    props: {
        details: {
            type: Array,
            requried: true
        }
    },
    template:
/*html*/
`
<ul>
    <li :for="detail in details">{{ detail }}</li>
</ul>

`
})