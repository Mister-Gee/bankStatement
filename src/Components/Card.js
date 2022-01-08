import { Dropdown, Form } from "react-bootstrap";
import { useState } from "react";

const Card = ({count, setStatementCount, setShowAnalyzeModal}) => {
    const [toggle, setToggle] = useState(false)
    const [isClassified, setIsClassified] = useState(false)

    
    return (
        <div className="statement-card">
            <div className="statement-card-content">
                <Form.Check className="statement-card-checkbox" />
                <div className="statement-card-body">
                    <div className="statement-card-title">
                        Adekunle Ciroma
                    </div>
                    <div className="statement-card-bank">
                        Bank Statement (Wema Bank)
                    </div>
                    {isClassified &&
                        <div className="statement-card-status">
                            <span>
                                Classified
                            </span>
                        </div>
                    }
                </div>
            </div>
            <div className="statement-card-option">
                <div onClick={() => setToggle(!toggle)}>
                    <span className="iconify" data-icon="iwwa:option-horizontal"></span>
                </div>
                <Dropdown show={toggle}>
                    <Dropdown.Menu>
                        <Dropdown.Item 
                            onClick={() => setIsClassified(!isClassified)}
                        >
                            Classify Statement
                        </Dropdown.Item>
                        <Dropdown.Item 
                            onClick={() => setShowAnalyzeModal(true)}
                        >
                            Analyze Statement
                        </Dropdown.Item>
                        <Dropdown.Item 
                            onClick={() => setStatementCount(count - 1)}
                        >
                            Delete Statement
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Card
