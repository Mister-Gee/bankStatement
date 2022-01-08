import Card from "./Card";
import {useState, useEffect} from "react";

const Statements = ({count, setStatementCount, setShowAnalyzeModal}) => {
    
    return (
        <div className="statements">
            {
                Array.apply(null, Array(count)).map((data, i) => (
                    <Card 
                        key={i}
                        count={count}
                        setStatementCount={setStatementCount}
                        setShowAnalyzeModal={setShowAnalyzeModal}
                    />
                ))
            }
        </div>
    )
}

export default Statements
