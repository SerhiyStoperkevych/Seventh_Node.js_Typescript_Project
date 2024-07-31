import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import List from './components/list/List';
import Menu from './components/Menu';
import Chat from './components/chat/Chat';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/logIn" />} />
        <Route path="/logIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/menu/list" element={<List />} />
        <Route path="/menu/chat" element={<Chat />}/>
        <Route path="/menu" element={<Menu />}/>
      </Routes>
    </Router>
  );
};

export default App;
