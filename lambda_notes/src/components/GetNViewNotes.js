import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { link } from 'react-router-dom';

class GetNViewNotes extends Component {
    constructor() {
        super();
        this.state = {
            notes: []
        }
    }

    componentDidMount() {
        axios
        .get ('https://fe-notes.herokuapp.com/note/get/all')
        .then (res => {
          this.setState ({notes: res.data});
        })
        .catch (err => console.log (err, 'failed to get api'));
    }

}