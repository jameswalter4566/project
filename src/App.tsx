import React from "react";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";

const appBg: React.CSSProperties = {
  minHeight: "100vh",
  minWidth: "100vw",
  background: "#0a0a0a",
  color: "#fff",
  fontFamily: "Inter, sans-serif",
  display: "flex",
  flexDirection: "column",
};

const mainStyle: React.CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const dividerStyle: React.CSSProperties = {
  width: "100%",
  height: 1,
  margin: "48px 0 32px 0",
  background:
    "linear-gradient(90deg, rgba(168,85,247,0) 0%, #a855f744 50%, rgba(0,255,255,0) 100%)",
  border: "none",
};

const App: React.FC = () => {
  return (
    <div style={appBg}>
      <main style={mainStyle}>
        <Hero />
        <hr style={dividerStyle} />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;