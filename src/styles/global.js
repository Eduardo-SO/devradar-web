import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus {
    outline: 0;
}

#root, html, body {
    height: 100%;
}

body {
    -webkit-font-smoothing: antialiased !important;
    background: #eee;
}

body, input, button {
    font: 14px 'Roboto', sans-serif;
}

button {
    border: 0;
    cursor: pointer;
}

input[type='submit'] {
    border: none;
    cursor: pointer;
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}
`
