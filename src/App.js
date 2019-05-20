import React from 'react';
import './App.css';
import BaseView from './components/BaseView';

class App extends React.Component {

  constructor(props) {
    super();
    this.state = {
      show: false
    };
  }

  render() {

    return (
      <div className="App">
        <BaseView
          top={<div className="bg-primary">'aa'</div>}
          bottom={'bb'} >
  
          <div className="d-flex align-items-stretch h-100 flex-row flex-wrap">
            <div style={{flexGrow: 8}}>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <p>asdasd</p>
              <button onClick={() => this.setState({show: !this.state.show})}>Show</button>
            </div>
            <div className="bg-secondary" style={{flexGrow: 3}}>bb</div>
          </div>
          {/* <Container className="py-2">
            <Row>
              <Col>
                <div className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                  <p>aaa</p>
                </div>
              </Col>
              <Col className="bg-primary">aa</Col>
            </Row>
  
          </Container> */}
        </BaseView>
      </div>
    );
  }
}

export default App;
