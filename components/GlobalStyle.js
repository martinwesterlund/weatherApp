import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    font-family: Calibri;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100vw;
    height: 100vw;
    text-align: center;
    color: darkblue;
  }

  .index{
      background-color: #f5f9ff;
      height: 100vh;
  }

  .history-list{
    display:flex;
    justify-content: center;
  }

  .history-content{
      flex-direction: column;
  }

  ul{
     list-style-type: none; 
     margin: 0;
     padding: 0;

  }

  li{
    font-size: 32px;
  }
  
  .input-row{
      display: flex;
      justify-content: center;
  }

  button{
    font-family: Calibri;
    font-size: 25px;
    width: 60%;
    padding: 10px;
    background-color: #d7e8ff;
    color: darkblue;
    position: absolute;
    bottom: 30px;
    border: 1px solid darkblue;
  }

  h1{
      margin: 0;
  }
  h2{
    font-size: 30px;
    font-weight: bold;
    margin: 0;
  }

  p{
      font-size: 24px;
      margin: 24px;
  }
  
  ::placeholder{
      color: lightblue;
  }

  input:focus::placeholder {
    color: transparent;
  }
  
`;

export default GlobalStyle;