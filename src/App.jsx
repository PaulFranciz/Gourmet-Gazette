import React from "react";
import Data from "./Data";
import Header from "./Header";
import Footer from "./Footer";
import Card from "./Card";

function App() {
  const CardData = Data.map((card) => {
    return <Card Key={card.id} card={card} />;
  });

  return (
    <>
      <Header />
      {CardData}
      <Footer />
    </>
  );
}

export default App;
