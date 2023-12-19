import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from "./styles/globalStyles";
import Header from "./components/Header";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Pills from "./pages/Pills";
import Calc from "./pages/Calc";
import Result from "./pages/Result";
import Loc from "./pages/Loc";
import Loading from "./pages/Loading";
import Community from "./pages/Community";
import Upload from "./pages/Upload";
import Edit from "./pages/Edit";
import Post from "./pages/Post";


function App() {
  return (
    <>
      <GlobalStyle/>
      <Router>
        <Header/>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pills" element={<Pills />} />
          <Route path="/calc" element={<Calc />} />
          <Route path="/result" element={<Result />} />
          <Route path="/location" element={<Loc />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/community" element={<Community />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/post" element={<Post />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
