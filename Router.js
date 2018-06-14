import React from 'react';
import { ActionConst, Router, Scene } from 'react-native-router-flux'; //used for navigation in the app

// Pages
import landingPage from './pages/landingPage/landingPage';
import loginPage from './pages/loginPage/loginPage';
import signupPage from './pages/signupPage/signupPage';
import emailPage from './pages/emailPage/emailPage';
import welcomePage from './pages/welcomePage/welcomePage';


const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 0 }}>
    <Scene key="app">
      {/* Start Page */}
      <Scene key="landing" component={landingPage} hideNavBar type={ActionConst.RESET} />
      {/* Sign up */}
      <Scene key="signup" component={signupPage} hideNavBar />
      {/* Login */}
      <Scene key="signin" component={loginPage} hideNavBar />
      {/* Email page */}
      <Scene key="email" component={emailPage} hideNavBar type={ActionConst.RESET} />
      {/* After Authenticated */}
      <Scene key="welcome" component={welcomePage} hideNavBar type={ActionConst.RESET} />
    </Scene>
  </Router>
);

export default RouterComponent;
