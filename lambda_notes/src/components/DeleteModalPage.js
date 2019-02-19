import React from 'react'
import axios from 'axios'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'

class DeleteModalPage extends React.Component {
    deleteThisNote = id => {
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.id}`)
            .then(res => {
                console.log('Note Gone');
                this.setState(this.state);

            })
            .catch(err => console.log(err, 'No Deleted Note'));
    };

}

export default DeleteModalPage;

   

