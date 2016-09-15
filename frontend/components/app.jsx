import React from 'react';
import Header from './header/header.jsx';
const App = ({children}) => (
  <div>
    <Header />
    {children}
    <div className="contact-links">
      <a href="https://www.linkedin.com/in/jangmi-jo-66048b125"><img src="http://res.cloudinary.com/wkdal720/image/upload/v1473910851/linkedin_lbczye.png"/></a>
      <a href="https://github.com/evdel720"><img src="http://res.cloudinary.com/wkdal720/image/upload/v1473910794/github_c54tsu.png"/></a>
      <a href="https://jangmi.me/"><img src="http://res.cloudinary.com/wkdal720/image/upload/v1473954667/imageedit_1_8723619617_gi5qh4.png"/></a>
    </div>
  </div>
);

export default App;
