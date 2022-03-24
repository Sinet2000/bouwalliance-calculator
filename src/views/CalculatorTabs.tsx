import React, { useState } from "react";

import { Tabs, Tab, Button } from "react-bootstrap";

const CalculatorTabs: React.FC = () => {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Home">
        <div>
          <Button variant="warning" className="mr-1">
            Warning
          </Button>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Profile">
        <div>
          <Button variant="warning" className="mr-1">
            Warning
          </Button>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        <div>
          <Button variant="warning" className="mr-1">
            Warning
          </Button>
        </div>
      </Tab>
    </Tabs>
  );
};

export default CalculatorTabs;
