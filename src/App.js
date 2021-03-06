import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News.jsx";
import Music from "./components/Music/Music.jsx";
import Sett from "./components/Sett/Sett.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state= {props.state.navbarComponent} />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs state= {props.state.dialogsComponent} dispatch= {props.dispatch} />} />
            <Route path="/profile/*" element={<Profile state= {props.state.profileComponent} dispatch= {props.dispatch}/>} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Sett />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;

// addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.newMessageText}