import { useState } from 'react';
import LandingPage from './components/LandingPage';
import CreateAccountForm from './components/CreateAccountForm';
import AccountSettings from './components/AccountSettings';
import LoginForm from './components/LoginForm';

type View = 'landing' | 'form' | 'account' | 'login';

interface UserData {
  fullName: string;
  phoneNumber: string;
  email: string;
  password: string;
  companyName: string;
  isAgency: boolean;
}

const App = () => {
  const [currentView, setCurrentView] = useState<View>('landing');
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleCreateAccount = () => {
    setCurrentView('form');
  };

  const handleLogin = () => {
    setCurrentView('login');
  };

  const handleFormSubmit = (formData: UserData) => {
    setUserData(formData);
    setCurrentView('account');
  };

  const handleFormClose = () => {
    setCurrentView('landing');
  };

  const handleLoginSubmit = (loginData: { email: string; password: string }) => {
    console.log('Login submitted:', loginData);
    // Here you would typically handle authentication
    // For now, just go back to landing page
    setCurrentView('landing');
  };



  const handleBackToLanding = () => {
    setCurrentView('landing');
    setUserData(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'form':
        return (
          <CreateAccountForm
            onSubmit={handleFormSubmit}
            onClose={handleFormClose}
          />
        );
      case 'login':
        return (
          <LoginForm
            onSubmit={handleLoginSubmit}
          />
        );
      case 'account':
        return userData ? (
          <AccountSettings
            userData={userData}
            onBack={handleBackToLanding}
          />
        ) : null;
      default:
        return (
          <LandingPage 
            onCreateAccount={handleCreateAccount}
            onLogin={handleLogin}
          />
        );
    }
  };

  return (
    <div>
      {renderCurrentView()}
    </div>
  );
};

export default App;