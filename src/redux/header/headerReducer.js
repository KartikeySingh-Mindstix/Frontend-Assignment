const initialState = {
    navigationTabs2 :[
        {
          type: "dropdown",
          title: "Men",
          link: "/men",
          dropdown: [
            {
              segmentTitle: "Featured",
              options: [
                { title: "New Arrivals", link: "/men/featured/new-arrivals" },
                { title: "adidas Sportswear", link: "/men/featured/adidas-sportswear" },
                { title: "Online Exclusives", link: "/men/featured/online-exclusives" },
                { title: "Essentials", link: "/men/featured/essentials" },
                { title: "Samba, Gazelle, Spezial", link: "/men/featured/samba-gazelle-spezial" },
                { title: "Personalizable Products", link: "/men/featured/personalizable-products" },
                { title: "Sale", link: "/men/featured/sale", style: { color: 'red' } } 
              ]
            },
            {
              segmentTitle: "Footwear",
              options: [
                { title: "Running", link: "/men/footwear/running" },
                { title: "Sneakers", link: "/men/footwear/sneakers" },
                { title: "Slides", link: "/men/footwear/slides" },
                { title: "Sandals", link: "/men/footwear/sandals" },
                { title: "Gym & Training", link: "/men/footwear/gym-training" },
                { title: "Football", link: "/men/footwear/football" },
                { title: "Basketball", link: "/men/footwear/basketball" },
                { title: "Hiking & Outdoor", link: "/men/footwear/hiking-outdoor" }
              ]
            },
            {
              segmentTitle: "Clothing",
              options: [
                { title: "T-Shirts & Tank Tops", link: "/men/clothing/t-shirts-tank-tops" },
                { title: "Shorts", link: "/men/clothing/shorts" },
                { title: "Joggers & Track Pants", link: "/men/clothing/joggers-track-pants" },
                { title: "Sweatshirts", link: "/men/clothing/sweatshirts" },
                { title: "Jackets", link: "/men/clothing/jackets" },
                { title: "Tracksuits", link: "/men/clothing/tracksuits" },
                { title: "Hoodies", link: "/men/clothing/hoodies" }
              ]
            },
            {
              segmentTitle: "Accessories",
              options: [
                { title: "Socks", link: "/men/accessories/socks" },
                { title: "Caps & Headwear", link: "/men/accessories/caps-headwear" },
                { title: "Backpacks", link: "/men/accessories/backpacks" },
                { title: "Gloves", link: "/men/accessories/gloves" },
                { title: "Balls", link: "/men/accessories/balls" }
              ]
            },
            {
              segmentTitle: "Sports",
              options: [
                { title: "Running", link: "/men/sports/running" },
                { title: "Gym & Training", link: "/men/sports/gym-training" },
                { title: "Football", link: "/men/sports/football" },
                { title: "Basketball", link: "/men/sports/basketball" },
                { title: "Hiking & Outdoor", link: "/men/sports/hiking-outdoor" },
                { title: "Swim", link: "/men/sports/swim" },
                { title: "Yoga", link: "/men/sports/yoga" }
              ]
            },
            {
              segmentTitle: "Sustainable Materials",
              options: [
                { title: "Made with Recycled Material", link: "/men/sustainable/recycled-material" },
                { title: "Vegan", link: "/men/sustainable/vegan" },
                { title: "Organic Cotton", link: "/men/sustainable/organic-cotton" }
              ]
            }
          ]
        },
        {
          type: "dropdown",
          title: "Women",
          link: "/women",
          dropdown: [
            {
              segmentTitle: "Trending",
              options: [
                { title: "Best Sellers", link: "/women/featured/best-sellers" },
                { title: "New In", link: "/women/featured/new-in" },
                { title: "adidas Originals", link: "/women/featured/originals" },
                { title: "Essentials", link: "/women/featured/essentials" },
                { title: "Exclusive Collection", link: "/women/featured/exclusive-collection" },
                { title: "Personalizable", link: "/women/featured/personalizable" },
                { title: "Sale", link: "/women/featured/sale", style: { color: 'red' } }
              ]
            },
            {
              segmentTitle: "Footwear",
              options: [
                { title: "Running", link: "/women/footwear/running" },
                { title: "Sneakers", link: "/women/footwear/sneakers" },
                { title: "Boots", link: "/women/footwear/boots" },
                { title: "Heels", link: "/women/footwear/heels" },
                { title: "Sandals", link: "/women/footwear/sandals" },
                { title: "Slides", link: "/women/footwear/slides" }
              ]
            },
            {
              segmentTitle: "Clothing",
              options: [
                { title: "T-Shirts", link: "/women/clothing/t-shirts" },
                { title: "Dresses", link: "/women/clothing/dresses" },
                { title: "Leggings", link: "/women/clothing/leggings" },
                { title: "Swimwear", link: "/women/clothing/swimwear" },
                { title: "Jackets", link: "/women/clothing/jackets" },
                { title: "Hoodies", link: "/women/clothing/hoodies" }
              ]
            },
            {
              segmentTitle: "Accessories",
              options: [
                { title: "Bags", link: "/women/accessories/bags" },
                { title: "Jewelry", link: "/women/accessories/jewelry" },
                { title: "Caps & Headwear", link: "/women/accessories/caps-headwear" },
                { title: "Socks", link: "/women/accessories/socks" },
                { title: "Scarves", link: "/women/accessories/scarves" }
              ]
            },
            {
              segmentTitle: "Sports",
              options: [
                { title: "Running", link: "/women/sports/running" },
                { title: "Yoga", link: "/women/sports/yoga" },
                { title: "Gym & Training", link: "/women/sports/gym-training" },
                { title: "Tennis", link: "/women/sports/tennis" },
                { title: "Swim", link: "/women/sports/swim" },
                { title: "Golf", link: "/women/sports/golf" }
              ]
            },
            {
              segmentTitle: "Sustainable Fashion",
              options: [
                { title: "Recycled Materials", link: "/women/sustainable/recycled-materials" },
                { title: "Vegan", link: "/women/sustainable/vegan" },
                { title: "Eco-Friendly Fabrics", link: "/women/sustainable/eco-friendly-fabrics" }
              ]
            }
          ]
        },
        {
          type: "dropdown",
          title: "Children",
          link: "/children",
          dropdown: [
            {
              segmentTitle: "Featured",
              options: [
                { title: "New Arrivals", link: "/children/featured/new-arrivals" },
                { title: "Best Sellers", link: "/children/featured/best-sellers" },
                { title: "School Essentials", link: "/children/featured/school-essentials" },
                { title: "Sale", link: "/children/featured/sale", style: { color: 'red' } }
              ]
            },
            {
              segmentTitle: "Footwear",
              options: [
                { title: "Sneakers", link: "/children/footwear/sneakers" },
                { title: "Boots", link: "/children/footwear/boots" },
                { title: "Sandals", link: "/children/footwear/sandals" },
                { title: "School Shoes", link: "/children/footwear/school-shoes" }
              ]
            },
            {
              segmentTitle: "Clothing",
              options: [
                { title: "T-Shirts", link: "/children/clothing/t-shirts" },
                { title: "Shorts", link: "/children/clothing/shorts" },
                { title: "Dresses", link: "/children/clothing/dresses" },
                { title: "Sweatshirts", link: "/children/clothing/sweatshirts" },
                { title: "School Uniforms", link: "/children/clothing/school-uniforms" }
              ]
            },
            {
              segmentTitle: "Accessories",
              options: [
                { title: "Backpacks", link: "/children/accessories/backpacks" },
                { title: "Caps", link: "/children/accessories/caps" },
                { title: "Lunch Boxes", link: "/children/accessories/lunch-boxes" },
                { title: "Water Bottles", link: "/children/accessories/water-bottles" }
              ]
            },
            {
              segmentTitle: "Sports",
              options: [
                { title: "Football", link: "/children/sports/football" },
                { title: "Basketball", link: "/children/sports/basketball" },
                { title: "Swimming", link: "/children/sports/swimming" },
                { title: "Gymnastics", link: "/children/sports/gymnastics" }
              ]
            },
            {
              segmentTitle: "Eco-Friendly Choices",
              options: [
                { title: "Organic Cotton", link: "/children/sustainable/organic-cotton" },
                { title: "Recycled Fabrics", link: "/children/sustainable/recycled-fabrics" },
                { title: "Sustainable Shoes", link: "/children/sustainable/sustainable-shoes" }
              ]
            }
          ]
        }
      ]
}

const headerReducer = (state = initialState, action) =>{
    switch(action.type){
        default: return state
    }
}

export default headerReducer