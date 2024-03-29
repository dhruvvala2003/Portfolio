import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function HeroSection() {
  return (
    <section id="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Let me tell you my story...</p>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>I am a passionate web developer...</p>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me...</p>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 My Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default App;
