import React from "react";
import styled from "styled-components";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css";
import Drawer from "../ui/Drawer/Drawer";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Container>
      <Drawer />
    </Container>
  );
}

export default App;
