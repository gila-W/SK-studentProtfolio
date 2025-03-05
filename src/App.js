import { BrowserRouter } from "react-router-dom";
import { Routing } from "./utils/Routing ";
import { HomePage } from "./components/homePage/HomePage";
import { Users } from "./components/users/Users";

function App() {
  return (
        <div>

    <BrowserRouter>
    <HomePage></HomePage>
    </BrowserRouter>
      <Users/>
    </div>
  );
}

export default App;
