import { Dropdown, Form  } from "react-bootstrap"

const Header = () => {
    return (
        <header>
           <div className="header-title">
                <h3>Bank Statements</h3>
           </div>
           <div className="header-dropdowns">
                <div className="disabled-dropdown">
                    <Dropdown >
                        <Dropdown.Toggle variant="secondary" disabled>
                            Action
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item >Classify Statement</Dropdown.Item>
                            <Dropdown.Item >Analyze Statement</Dropdown.Item>
                            <Dropdown.Item>Delete Statement</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div className="primary-dropdown">
                    <button className="btn btn-secondary btn-selection">
                        {/* <button.Toggle variant="secondary" className="btn-selection"> */}
                            <Form.Check aria-label="option 1" />  <span>Mark For Selection</span>
                        {/* </button.Toggle> */}
                    </button>
                </div>
                <div className="secondary-dropdown">
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                        Upload Bank Statement
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item >Single Upload</Dropdown.Item>
                            <Dropdown.Item >Multiple Upload</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
           </div>
        </header>
    )
}

export default Header
