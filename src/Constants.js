// user data
import {SiHtml5, SiStyledcomponents, SiNestjs, SiMaterialui} from "react-icons/si";
import {DiCss3, DiReact} from "react-icons/di";
import {IoLogoJavascript} from "react-icons/io";
import bikeRental from './Assets/images/bike-rental.gif'
import quizApp from './Assets/images/quiz-app.gif'
import NFT from './Assets/images/nft.gif'
import Shashank from './Assets/images/shashank.jpg';

export const USER = {
    profileImg: Shashank,
    fullName: 'Shashank Maurya',
    resumeLink: 'https://drive.google.com/file/d/1lWliF3wrNeIxVdpZftWSw5zSz0W7CR1F/view?usp=sharing',
    github: 'https://github.com/shashank1020',
    linkedin: 'www.linkedin.com/in/shashank-maurya-15617b179',
    phoneNo: '7302803506',
    email: 'shashankmaurya1020@gmail.com',
    projects: [
        {
            title: 'NFT Market',
            description: 'This is an android/IOS app build using React Native using expo, Buy, store, collect NFTS, exchange & earn crypto.',
            technologies: [DiReact,IoLogoJavascript],
            hostedLink: 'https://nefpro.netlify.app/',
            github: 'https://github.com/shashank1020/NFTShowcase',
            img: NFT
        },
        {
            title: 'Bike Rental',
            description: 'This is bike booking app, on any location in india, you can book any bike of like, from performance bike to mileage bikes, never stop traveling',
            technologies: [DiReact, SiHtml5, DiCss3, SiStyledcomponents, SiNestjs, SiMaterialui, IoLogoJavascript],
            github: 'https://github.com/shashank1020/BikeRental',
            img: bikeRental
        },
        {
            title: 'Quiz Website',
            description: 'This is quiz website, anyone can play any available quiz create by any user, only authenticated user can create new quiz',
            technologies: [DiReact, SiHtml5, DiCss3, SiStyledcomponents, SiNestjs, SiMaterialui, IoLogoJavascript],
            github: 'https://github.com/shashank1020/BikeRental',
            img: quizApp
        },
    ]
}