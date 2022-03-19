import React from "react";

class WorkView extends React.Component {
  render() {
    return (
      <div className="work-view">
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Pokedex</Card.Title>
                <Card.Text>
                This small web application uses HTML, JavaScript, jQuery, Bootstrap, and interfaces with an external Pokemon API using AJAX. This app displays a list of 150 Pokemon, and upon user action (i.e., clicking on a Pokemon), user can view details for that Pokemon.
                </Card.Text>
                <Card.Link href="https://github.com/samskaufel/simple-js-app" target="_blank">See project on GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          
        ))}
      </Row>
      <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>myFlix</Card.Title>
              <Card.Text>
              This responsive SPA is the client-side for an application called myFlix based on its existing server-side code (REST API and database). This app will provide users with access to information about different
movies, directors, and genres. Users will be able to sign up, update their
personal information, and create a list of their favorite movies.
              </Card.Text>
              <Card.Link href="https://github.com/samskaufel/myFlix-client" target="_blank">See project on GitHub</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src="holder.js/100px160" />
              <Card.Body>
                <Card.Title>Meet</Card.Title>
                <Card.Text>
                This serverless, PWA was built with React using a
              TDD technique. The application uses the Google
              Calendar API to fetch upcoming events.
                </Card.Text>
                <Card.Link href="https://github.com/samskaufel/meet" target="_blank">See project on GitHub</Card.Link>
              </Card.Body>
            </Card>
          </Col>
          
        ))}
      </Row>
    
    </div>
    );
  }
}

export default WorkView;
