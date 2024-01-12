import AppStyle from "./App.style";
import { Canvas, Header, Sidebar, Toolbar } from "./Components";
import GlobalStyle from "./styles/GlobalStyle";
function App() {
  return (
    <>
    <GlobalStyle />
      <AppStyle>
        {/* <Header /> */}
        <Sidebar />
        <Toolbar />
        {/* <Canvas /> */}
      </AppStyle>
    </>
  );
}

export default App;
