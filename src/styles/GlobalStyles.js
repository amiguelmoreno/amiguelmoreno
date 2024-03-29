import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    --primary-color: #262b31;
    --primary-color-light: #44505a; 
    --secundary-color: #FFFFFF;
    --terciary-color: #77f8e9;

  }

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Nunito", sans-serif;
  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;

  @media (width <= 1200px) {
    font-size: 50%;
  }

}

body {
 
  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
  user-select: none;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--terciary-color);
  outline-offset: 2px;
}


/* App.css */

/* Estilos para las transiciones de entrada */
.fade-enter {
  opacity: 0.01;
}

.fade-enter-active {
  opacity: 1;
  transition: opacity 300ms ease-in;
}

/* Estilos para las transiciones de salida */
.fade-exit {
  opacity: 1;
}

.fade-exit-active {
  opacity: 0.01;
  transition: opacity 300ms ease-out;
}


`;

export default GlobalStyles;
