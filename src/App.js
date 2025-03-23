import { useState } from 'react';
import Login from './components/forms/Login';
import SignUp from './components/forms/Signup';
import CoverPage from './components/CoverPage';

const App = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [signin, setSignin] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
    window.location.hash = "#form1";
  };

  const handleSignUpLinkClick = () => {
    setShowLoginForm(false);
    setShowSignUpForm(true);
  };

  return (
    <div className="relative h-screen">
      <CoverPage onLoginButtonClick={handleLoginButtonClick} />
      {showLoginForm && <Login onSignUpLinkClick={handleSignUpLinkClick} />}
      {showSignUpForm && <SignUp onLoginButtonClick={handleLoginButtonClick} />}
    </div>
  );
};

export default App;