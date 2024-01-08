import AppStyle from "./App.style";
import { Canvas, Header, Sidebar } from "./Components";
import GlobalStyle from "./styles/GlobalStyle";
function App() {
  return (
    <>
    <GlobalStyle />
      <AppStyle>
        <Header />
        <Sidebar />
        <Canvas />
      </AppStyle>
    </>
  );
}

export default App;
