import React from "react";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import HomeView from "../home-view/home-view";
import AboutView from "../about-view/about-view";
import ContactView from "../contact-view/contact-view";
import WorkView from "../work-view/work-view";

class HomeView extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Container>
          <Route path="/home" component={HomeView} />
          <Route path="/about" component={AboutView} />
          <Route path="/contact" component={ContactView} />
          <Route path="/work" component={WorkView} />
        </Container>
      </Router>
    );
  }
}

export default HomeView;
