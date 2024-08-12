import React, { useState, useContext } from "react";
import { Container } from "@mui/material";
import { Header2 } from "./components/Header2";
import { SocialMediaProvider } from "./context/SocialMediaProvider";
import { Form } from "./components/Form";
import { TableUser } from "./components/TableUser";
import "./App.css";
import "./font.css";
function App() {
  return (
    <SocialMediaProvider>
      <div className="App">
        <div className="persian-font">
          <Container>
            <Header2></Header2>
            <Form></Form>

            <TableUser></TableUser>
          </Container>
        </div>
      </div>
    </SocialMediaProvider>
  );
}

export default App;
