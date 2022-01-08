import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import {useDropzone} from 'react-dropzone'; 


const MultipleUpload = ({show, setShow, count, setStatementCount}) => {
    const {
        acceptedFiles,
        getRootProps,
        getInputProps
      } = useDropzone({    
        maxFiles:5,
        accept: '.pdf, .PDF'
      });

      const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));

    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Multiple Upload</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Select Bank</Form.Label>
                        <Form.Select>
                            <option disabled selected>Select Bank</option>
                            <option value="firstbank">First Bank</option>
                            <option value="gtbank">Guaranty Trust Bank</option>
                            <option value="uba">United Bank For Africa</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Choose File</Form.Label>
                            <div {...getRootProps({ className: 'dropzone' })}>
                                <input {...getInputProps()} />
                                <span className="iconify" data-icon="ant-design:file-filled"></span>
                                <p>Choose file to upload (PDF)</p>
                            </div>
                    </Form.Group>
                    <aside>
                        <ul>{acceptedFileItems}</ul>
                    </aside>
                    <Form.Group className="mb-3 mt-4">
                        <Button variant="secondary" className="modal-btn" onClick={() => setStatementCount(count + acceptedFiles.length)}>Upload and Convert Bank Statement</Button>
                    </Form.Group>
                </Form> 
            </Modal.Body>
        </Modal>
    )
}

export default MultipleUpload
