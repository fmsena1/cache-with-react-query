import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/profile/fmsena1">fmsena1</Link>
          </li>
          <li>
            <Link to="/profile/diegorondao">diegorondao</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/profile/:userIdentifier" element={<UserProfile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
