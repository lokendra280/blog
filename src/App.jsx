import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Form from "./pages/Form";
import PageNotFound from "./pages/PageNotFound";
import Hamer from "./pages/Hamer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hammer" element={<Hamer/>} />
          <Route path="/form" element={<Form />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
