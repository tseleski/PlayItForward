import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif;
    }
    #root{
        margin:0 auto;
    }
    a {
      /* Applies to all unvisited links */
      text-decoration:  none;
      color: inherit;
    }
 `
