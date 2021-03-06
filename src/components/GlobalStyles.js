import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* 
      box-sizing: border-box is the default styling 
      that browsers use for the <table>, <select>, and <button> elements,
      and for <input> elements whose type is radio, checkbox, reset, button, submit, color, or search.
      basically put everything inside.

      where an element’s specified width and height aren’t affected by padding or borders. 
    */
  }

   html{
        &::-webkit-scrollbar{
            width: 0.9rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #333;
        }
        &::-webkit-scrollbar-track {
    background: white;
  }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2{
        font-size: 3rem;
        font-family: 'Bebas Neue';       
        font-weight: lighter; 
        color: #333;
    }
    h3{
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
    }
    a{
        text-decoration: none;
        color: #333;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
    font-family: "Montserrat", sans-serif;
    }
`;
export default GlobalStyles; // import it in App.js
