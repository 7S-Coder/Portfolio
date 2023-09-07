import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
