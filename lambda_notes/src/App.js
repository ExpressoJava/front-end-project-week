import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GetNViewNotes from './components/GetNViewNotes'
import ViewNotePage from './components/ViewNotePage'
import NavPannel from './components/NavPannel'


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
          <NavPannel />

          <Route exact path ="/" component={GetNViewNotes} />
          {/* <Route exact path ="/note/:id" component={ViewNotePage} />
          <Route exact path ="/noteForm" component={CreateNewOnes} />
          <Route exact path ="/note/edit/:id" component={ViewGetNEdit} />
          <Route exact path ="/delete/:id" component={DeleteModalPage} /> */}
        </EverythingBox>
      </Router>
    );
  }
}

export default App;


