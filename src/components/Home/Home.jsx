import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Home = () => {
  return (
    <div className="main-screen">
      <header className="header">
        <h1>Fruit.AI</h1>
        <p>"Be Healthy!"</p>
      </header>
      <div className="grid-container">
        <Link to="/chat" className="grid-item chat">
          Chat
        </Link>
        <Link to="/translate" className="grid-item translate">
          <img
            src="https://img.icons8.com/?size=100&id=0rqu8jqJI1c7&format=png&color=000000"
            alt="Translate"
          />
        </Link>
        <Link to="/faqs" className="grid-item faqs">
          FAQs
        </Link>
        <Link to="/about" className="grid-item about">
          About
        </Link>
      </div>
      <div className="dots">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default Home;
