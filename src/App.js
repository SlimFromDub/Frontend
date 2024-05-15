import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Login from "./Login";
import Search from "./Search";
import Detail from "./Detail";
import Layout from "./Layout";


export function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Layout  />}>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/detail" element={<Detail />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
