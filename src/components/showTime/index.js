import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
export default function ShowTime() {
  
  const [key, setKey] = useState("home");
  const renderCinema = () =>{

  }
  return (
    <div className="mt-5 showstime">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Home">
          Homeeeeeeeee
        </Tab>
        <Tab eventKey="profile" title="Profile">
          Prooooooo
        </Tab>
        <Tab eventKey="contact" title="Contact">
          contactttttttt
        </Tab>
      </Tabs>
    </div>
  );
}
