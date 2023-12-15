import { createGlobalStyle } from "styled-components";
import PoppinsLight from '../fonts/Poppins/Poppins-Light.ttf'
import PoppinsMedium from '../fonts/Poppins/Poppins-Medium.ttf'
import PoppinsRegular from '../fonts/Poppins/Poppins-Regular.ttf'

const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: 'Poppins-Light';
        src: local('Poppins-Light'), local('Poppins-Light');
        font-style: normal;
        src: url(${PoppinsLight}) format('truetype');
  }
@font-face {
        font-family: 'Poppins-Medium';
        src: local('Poppins-Medium'), local('Poppins-Medium');
        font-style: normal;
        src: url(${PoppinsMedium}) format('truetype');
  }
@font-face {
        font-family: 'Poppins-Regular';
        src: local('Poppins-Regular'), local('Poppins-Regular');
        font-style: normal;
        src: url(${PoppinsRegular}) format('truetype');
  }

  :root {
    --background-dark: #302e3e;
    --background-little-dark: #444447;
    --button-hover-color: #545efc;

    --container-border-radius: 12px;
  }

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

body {
  margin: 0;
  font-family: "Poppins-Regular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
`

export default GlobalStyle