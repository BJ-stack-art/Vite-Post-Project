import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import PostPage from "./components/post/PostPage";
import UserPage from "./components/users/UserPage";
import { Radio } from "antd";
import { useEffect, useState } from "react";

function App() {
  const [page, setPage] = useState<string>("home");
  const navigate = useNavigate();
  useEffect(() => {
    navigate(page);
  }, [page]);

  return (
    <div className="App">
      <header style={{ marginBottom: "30px" }} className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div
        style={{ width: "75%", margin: "20px auto", paddingBottom: "100px" }}
      >
        <div>
          <Radio.Group value={page} onChange={(e) => setPage(e.target.value)}>
            <Radio.Button type="primary" value="home">
              Home
            </Radio.Button>
            <Radio.Button type="primary" value="users">
              Users
            </Radio.Button>
            <Radio.Button type="primary" value="posts">
              Posts
            </Radio.Button>
          </Radio.Group>
        </div>
        <div>
          <Routes>
            <Route path="/posts/*" element={<PostPage />} />
            <Route path="/users/*" element={<UserPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
