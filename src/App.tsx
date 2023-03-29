import React, { useState , useEffect} from "react";
import CardGrid from "./components/CardGrid";
import Card from "./components/Card";
import Navigation from "./components/Navigation";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

const cards = [
  {
    imageUrl: "https://via.placeholder.com/200x100",
    title: "Card 1",
    subtitle: "Subtitle for Card 1",
    text: "Text for Card 1",
    authorName: "Author 1",
    authorAvatarUrl: "https://via.placeholder.com/50",
    logo: "https://via.placeholder.com/30",
  },
  {
    imageUrl: "https://via.placeholder.com/200x100",
    title: "Card 2",
    subtitle: "Subtitle for Card 2",
    text: "Text for Card 2",
    authorName: "Author 2",
    authorAvatarUrl: "https://via.placeholder.com/50",
    logo: "https://via.placeholder.com/30",
  },
  // add more cards as needed
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/">
           <Card {...cards[0]} />
        </Route>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {/* <CardGrid cards={cards.concat(cards)} /> */}
    </div>
  );
};

export default App;
