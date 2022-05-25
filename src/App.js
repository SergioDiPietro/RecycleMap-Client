import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { Login } from './screens/LoginScreen/Login';
import { UserProfile } from './screens/UserProfileScreen/UserProfile';
import { Register } from './screens/RegisterScreen/Register';
import { RecycleMarkerForm } from './screens/RecycleMarkerForm/RecycleMarkerForm';
import { Home } from './screens/HomeScreen/Home';
import { RequireAuth } from './auth';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="mainContainer">
          <div className="header">{/* <Header /> */}</div>
          <div className="body">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/home"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="/profile"
                element={
                  <RequireAuth>
                    <UserProfile />
                  </RequireAuth>
                }
              />
              <Route
                path="/markerform"
                element={
                  <RequireAuth>
                    <RecycleMarkerForm />
                  </RequireAuth>
                }
              />
            </Routes>
          </div>
          <div className="navbar">
            <RequireAuth>
              <Navbar />
            </RequireAuth>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
