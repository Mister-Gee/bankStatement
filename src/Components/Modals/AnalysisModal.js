import { Modal } from 'react-bootstrap';

const AnalysisModal = ({show, setShow}) => {
    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton>
                <Modal.Title>Analysis Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='analysis-content'>
                    <div className="analysis-card">
                        <div className='amount'>
                            <div className='title'>Loan Amount</div>
                            <div className='value'>₦50,000</div>
                        </div>
                        <div className='tenure'>
                            <div className='title'>Loan Tenure</div>
                            <div className='value'>3 Months</div>
                        </div>
                    </div>
                    <div className='risk-status'>
                        <div className='risk'>
                            <div className='title'>Risk</div>
                            <div className='medium-status'>Medium</div>
                        </div>
                        <div className='status'>
                            <div className='title'>Status</div>
                            <div className='accepted-status'>Accepted</div>
                        </div>
                    </div>
                    <div className='loan-reason'>
                        <div className='title'>Loan Reason</div>
                        <div className='value'>House Rent</div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default AnalysisModal
