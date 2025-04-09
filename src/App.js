import { Routes, Route } from 'react-router';
import CoverPage from './components/CoverPage';
import Login from './components/forms/Login';
import SignUp from './components/forms/Signup';
// import NoPage from "./components/NoPage";

const App = () => {
  return (
    <>
        <Routes>
          <Route index element={<CoverPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
    </>
  );
};

export default App;