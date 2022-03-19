import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import HomeView from './components/home-view/home-view';


// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class Portfolio extends React.Component {
  render() {
    return (
      <Container>
      <HomeView />
      </Container>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(Portfolio), container);