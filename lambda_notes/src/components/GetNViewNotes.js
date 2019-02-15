import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { link } from 'react-router-dom'

const ViewListBox = styled.div`
    background: #f2f1f2;
    width: 100%;
    max-height: 1000px;
    overflow-y: scroll;
`;

const ViewNotesBox = styled.div`
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 50px;
`;

const NotesListHeader = styled.h2`
  color: #414242;
`;


const AllNotesBox = styled.div`
  width: 665px;
  display: flex;
  flex-wrap: wrap;
`;

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

    render() {
        return (
            <ViewListBox>
                <ViewNotesBox>
                    <NotesListHeader>Your Notes:</NotesListHeader>
                    <AllNotesBox>

                    </AllNotesBox>
                </ViewNotesBox>
            </ViewListBox>
        )
    }

}

export default GetNViewNotes;