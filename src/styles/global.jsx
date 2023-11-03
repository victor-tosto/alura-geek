import css from 'styled-jsx/css'

export default css.global`
  
  :root {

    // Colors
    --black: #464646;
    --blue: #2A74E4;
    --white: #FFFFFF;

    // Typography

    // Global Font Size
    font-size: 62.5%;

  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: var(--white);
    min-height: 100vh;
  }

`
