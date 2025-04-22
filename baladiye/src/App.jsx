import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import SignUp from './components/SignUp';
import SignIn from './components/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        {/* Redirect to signin by default */}
        <Route path='/' element={<Navigate to='/signin' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
