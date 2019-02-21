import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import axios from 'axios'
// import { Link } from 'react-router-dom'





class DeleteModalPage extends React.Component {

    deleteThisNote = e => {
        e.preventDefault();
        axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.id}`)
        .then(response => {
        this.setState({ note: response.data });
        window.location.reload();
        })
        .catch(err => console.log(err))
    };

//   componentDidUpdate(prevState) {
//     if (this.props.updating !== prevState.updating) {
//       if (!this.props.updating) {
//         this.getNote();
//       }
//     }
//   }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle} className={this.props.className}
        >
          <ModalHeader>Are you sure you want to delete this?</ModalHeader>
          <ModalBody>
          <Button color="danger" onClick={this.deleteThisNote} 
            // onClick={this.props.toggle} 
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

export default DeleteModalPage;