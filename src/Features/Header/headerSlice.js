import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    navigationTabs : [
        {
          type: "simple",
          title: "Home",
          link: "/"
        },
        {
          type: "dropdown",
          title: "Products",
          link: "/products",
          dropdown: [
            {
              segmentTitle: "Electronics",
              options: [
                { title: "Mobile Phones", link: "/products/electronics/mobiles" },
                { title: "Laptops", link: "/products/electronics/laptops" },
                { title: "Cameras", link: "/products/electronics/cameras" }
              ]
            },
            {
              segmentTitle: "Clothing",
              options: [
                { title: "Men's Wear", link: "/products/clothing/men" },
                { title: "Women's Wear", link: "/products/clothing/women" },
                { title: "Kids' Wear", link: "/products/clothing/kids" }
              ]
            },
            {
              segmentTitle: "Accessories",
              options: [
                { title: "Bags", link: "/products/accessories/bags" },
                { title: "Watches", link: "/products/accessories/watches" },
                { title: "Jewelry", link: "/products/accessories/jewelry" }
              ]
            }
          ]
        },
        {
          type: "simple",
          title: "About",
          link: "/about"
        },
        {
          type: "dropdown",
          title: "Services",
          link: "/services",
          dropdown: [
            {
              segmentTitle: "Consulting",
              options: [
                { title: "Business Consulting", link: "/services/consulting/business" },
                { title: "Tech Consulting", link: "/services/consulting/tech" }
              ]
            },
            {
              segmentTitle: "Repair",
              options: [
                { title: "Electronics Repair", link: "/services/repair/electronics" },
                { title: "Clothing Repair", link: "/services/repair/clothing" }
              ]
            }
          ]
        },
        {
          type: "simple",
          title: "Contact",
          link: "/contact"
        }
      ]
}
export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        // No reducers since no actions are needed
    },
});

export const selectHeader = (state) => state.header;