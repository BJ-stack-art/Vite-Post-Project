import logo from "./logo.svg";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import PostPage from "./components/post/PostPage";
import UserPage from "./components/users/UserPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/posts"}>Posts</Link>
        <Link to={"/users"}>Users</Link>
      </div>
      <div>
        <Routes>
          <Route path="/posts/*" element={<PostPage />} />
          <Route path="/users/*" element={<UserPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
