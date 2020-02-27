// Components==============
import { createGlobalStyle } from "styled-components";
import woff_500 from "../assets/fonts/poppins-v9-latin-500.woff";
import woff2_500 from "../assets/fonts/poppins-v9-latin-500.woff2";
import woff_600 from "../assets/fonts/poppins-v9-latin-600.woff";
import woff2_600 from "../assets/fonts/poppins-v9-latin-600.woff2";
import woff700 from "../assets/fonts/poppins-v9-latin-700.woff";
import woff2_700 from "../assets/fonts/poppins-v9-latin-700.woff2";
import woff_reg from "../assets/fonts/poppins-v9-latin-regular.woff";
import woff2_reg from "../assets/fonts/poppins-v9-latin-regular.woff2";
// =========================

const GlobalStyles = createGlobalStyle`
   
   /* =========================================*/
   /* Global style ============================*/
   /* =========================================*/
   
   .photo, .title{
      visibility: visible;
      cursor: initial;
   }

   html {
      font-family: poppins;
      background-color: ${({ theme: { gray } }) => gray.s1};
      height: 100%;

      input, select, textarea, label{
         font-family: poppins;
         font-size: 14px;
      }
   }

   body {
      color: ${({ theme: { gray } }) => gray.s9};
      height: 100%;
   }

   #___gatsby {
      height: 100%;
   }

   #gatsby-focus-wrapper {
      height: 100%;
   }

   svg{
      display: block;
   }

   /* =========================================*/
   /* Font ====================================*/
   /* =========================================*/

/* poppins-regular - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: local('Poppins Regular'), local('Poppins-Regular'),
       url('${woff2_reg}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('${woff_reg}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* poppins-500 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  src: local('Poppins Medium'), local('Poppins-Medium'),
       url('${woff2_500}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('${woff_500}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* poppins-600 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
       url('${woff2_600}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url('${woff_600}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}

/* poppins-700 - latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  src: local('Poppins Bold'), local('Poppins-Bold'),
         url('${woff2_700}') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
         url('${woff700}') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}


   h1 {
      font-size: 29px;
   }

   h2 {
      font-size: 25px;
   }

   h3 {
      font-size: 20px;
   }

   p,
   a,
   strong,
   span, 
   li
    {
      font-size: 16px;
   }

   /* =========================================*/
   /* Reset ===================================*/
   /* =========================================*/

   *,
   ::before,
   ::after {
      box-sizing: border-box;
   }


   body,
   h1,
   h2,
   h3,
   h4,
   p,
   ul,
   ol,
   li,
   figure,
   figcaption,
   blockquote,
   dl,
   dd {
   margin: 0;
   }

   p,
   ul,
   ol,
   dl,
   address,
   button
    {
      line-height: ${({ theme }) => theme.lineHeight.s3};
      padding: 0;
   }

   button {
      background: none;
      color: ${({ theme: { black } }) => black};
      border: none;
      padding: 0;
      cursor: pointer;
      font-family: inherit;
      outline: inherit;
      font-size: 16px;
   }

   pre {
      white-space: pre-wrap;
   }

   hr {
      border: 0.5px solid;
   }

   ul {
      list-style: none;
   }

   ol {
      padding-left: 1em;
   }

   a {
      color: black;
      text-decoration: none;
   }

   img,
   video,
   canvas,
   audio,
   iframe,
   embed,
   object {
      display: block;
   }

   img,
   video,
   canvas,
   audio,
   iframe,
   embed,
   object {
      vertical-align: middle;
   }

   img,
   video {
      max-width: 100%;
      height: auto;
   }

   img {
      border-style: none;
   }
   `;

export default GlobalStyles;
