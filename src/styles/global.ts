import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   :root {
    --background:#f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;
    --green: #33CC95;

    --blue-light: #6933ff;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
   }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
      /*font-size: 16 px (Desktop)*/
   html {
      @media (max-width: 1080px) {
         font-size: 93.75%       /* é equivalent a 15px */
      }
      @media (max-width: 720px) {
         font-size: 87.5%       /* é equivalent a 14px */
      }
   }
     /*REM = 1rem = 16px*/
   body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
   } 
   body, input, textarea, button {
      font-family: 'poppins', sans-serif; font-weight:400;
   }

   h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
   }
   
   button {
      cursor: pointer;
   }

   [disabled] {
      opacity: 0,6;
      cursor: not-allowed;
   }

   .react-modal-overlay{
     
   }

   .react-modal-content{
      width: 100%!important;
      max-width:576px!important;
      background: var(--background)!important;
      padding: 3rem!important;
      position: relative!important;
      border-radius: 0.24rem!important; 
   } 

   .react-modal-close {
      position: absolute;
      right: 1.5rem;
      top: 1.5rem;
      border: 0;
      background: transparent;

      transition: filter 0.2s;

      &:hover {
         filter: brightness(0.8);
      }
   }
`