import { shieldTick, support, truckFast, facebook, twitter, instagram } from '../assets/icons';
import { bigShoe1, bigShoe2, bigShoe3, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, shoe4, shoe5, shoe6, shoe7, customer1, customer2 } from "../assets/images";


export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: thumbnailShoe1,
        bigShoe: bigShoe1
    },
    {
        thumbnail: thumbnailShoe2,
        bigShoe: bigShoe2
    },
    {
        thumbnail: thumbnailShoe3,
        bigShoe: bigShoe3
    }
];

export const statistics = [
    { value: '2k+', label: 'Brands' },
    { value: '600+', label: 'Shops' },
    { value: '350k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: shoe4,
        name: "Vans Authentic Slim",
        price: "$200.20",
        rating: '(5.0)'
    },
    {
        imgURL: shoe5,
        name: "Vans SK8-HI Slim",
        price: "$210.20",
        rating: '(4.5)'
    },
    {
        imgURL: shoe6,
        name: "UltraRange EXO",
        price: "$220.20",
        rating: '(3.5)'
    },
    {
        imgURL: shoe7,
        name: "Vans Skate Grosso",
        price: "$230.20",
        rating: '(4.5)'
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Vans Old Skool", link: "/" },
            { name: "Vans Authentic", link: "/" },
            { name: "Vans Sk8-Hi", link: "/" },
            { name: "Vans Slip-On", link: "/" },
            { name: "Vans Era", link: "/" },
            { name: "Vans UltraRange", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@vans.com", link: "mailto:customer@vans.com" },
            { name: "+21262656465", link: "tel:+21262656465" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];