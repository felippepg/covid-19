import CssBaseline from '@mui/material/CssBaseline';
//import StylesProvider from "@emotion/styled";
import GlobalStyle from './commons/styles/global.style.js';
import Main from './containers/Main/index.jsx';

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyle />
      <Main />
    </>
  );
}

export default App;
