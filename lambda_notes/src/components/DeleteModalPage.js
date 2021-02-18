import React,{ Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import axios from 'axios'

import {withRouter} from 'react-router-dom'





class DeleteModalPage extends Component {
    deleteThisNote = () => {
        
        
        axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.id}`)
        .then(response => {
           console.log(response)
        
        this.props.history.push('/');
        })
        .catch(err => console.log(err))
    };



  render() {
    return (
      <div>s
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}
        >
          <ModalHeader>Are you sure you want to delete this?</ModalHeader>
          <ModalBody>
          <Button color="danger" onClick={this.deleteThisNote} 
            
          >
            Delete
            </Button><span>             </span>
            <Button color="#f3f7f6" onClick={this.props.toggle}>
              No
            </Button>
          </ModalBody>
          <ModalFooter>Deleting is Final!
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default withRouter(DeleteModalPage);
  
