import './styles/App.css';
import React from 'react';

const App = () => {
    return (
      <div>
        {/* Header */}
        <header className="header">
          <div className="logo">TodoList</div>
          <nav className="nav">
            <a href="#features" className="navLink">Features</a>
            <a href="#made-for" className="navLink">Made For</a>
            <a href="#resources" className="navLink">Resources</a>
            <a href="#pricing" className="navLink">Pricing</a>
          </nav>
          <div className="auth-buttons">
            <button className="loginButton">Log in</button>
            <button className="ctaButton">Start for Free</button>
          </div>
        </header>
      </div>
    );
  };
  
  export default App;