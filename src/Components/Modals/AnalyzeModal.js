import { Modal, Button, Form } from 'react-bootstrap';

const AnalyzeModal = ({show, setShow, setShowAnalysis}) => {
    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Analyze Statement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Loan Amount</Form.Label>
                        <Form.Control type="text" placeholder="₦0.00" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Loan Tenure</Form.Label>
                        <Form.Control type="text"/>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-4">
                        <Button variant="secondary" className="modal-btn" onClick={() => setShowAnalysis(true)}>Analyze</Button>
                    </Form.Group>
                </Form> 
            </Modal.Body>
        </Modal>
    )
}

export default AnalyzeModal
