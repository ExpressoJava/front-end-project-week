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

   

