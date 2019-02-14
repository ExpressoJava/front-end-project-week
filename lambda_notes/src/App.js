import React, { Component } from 'react';

import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


const EverythingBox = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  margin: 0 auto;
  max-width: 850px;
  height:100%;
  border: 1.5px solid gray;
  
`;

class App extends Component {
  render() {
    return (
      <Router>
        <EverythingBox>
          <Route exact path ="/" component={GetNViewNotes} />
          <Route exact path ="/note/:id" component={ViewNotePage} />
          <Route exact path ="/" component={CreateNewOnes} />
          <Route exact path ="/" component={ViewGetNEdit} />
          <Route exact path ="/" component={DeleteModalPage} />
        </EverythingBox>
      </Router>
    );
  }
}

export default App;
