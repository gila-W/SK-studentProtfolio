import { BrowserRouter } from "react-router-dom";
import { Routing } from "./utils/Routing ";
import { HomePage } from "./components/homePage/HomePage";
function App() {
  return (
    <BrowserRouter>
    <HomePage></HomePage>
    </BrowserRouter>
  );
}

export default App;
