import React from "react";
import Card from "./components/Card";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Card
        imageUrl="https://via.placeholder.com/400x200"
        title="Card Title"
        subtitle="Card Subtitle"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, ipsum in hendrerit vehicula, ipsum nisi mattis lorem, eu pellentesque turpis elit eget metus."
        authorAvatarUrl="https://via.placeholder.com/40x40"
        authorName="John Doe"
        logoUrl="https://via.placeholder.com/40x40"
      />
    </AppContainer>
  );
};

export default App;
