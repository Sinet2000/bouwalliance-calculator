import React from "react";

import Container from "react-bootstrap/Container";

import CalculatorTabs from "./views/CalculatorTabs";

const App: React.FC = () => {
  return (
    <Container className="p-3">
      <div>
        <h1 className="header">
          Example of <strong>Bouw Alliance B.V.</strong> Price Calculatir
        </h1>
      </div>
      <CalculatorTabs />
    </Container>
  );
};

export default App;
