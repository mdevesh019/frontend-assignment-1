import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import BlogDetail from "./components/BlogDetail/blogDetail";
import Home from "./components/Home";
import { store } from "./state/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
