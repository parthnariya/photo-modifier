import AppStyle from "./App.style";
import { Header, Sidebar } from "./Components";
import GlobalStyle from "./styles/GlobalStyle";
function App() {
  return (
    <>
    <GlobalStyle />
      <AppStyle>
        <Header />
        <Sidebar />
      </AppStyle>
    </>
  );
}

export default App;
