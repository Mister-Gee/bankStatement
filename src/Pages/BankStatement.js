import { useState } from 'react';
import EmptyStatement from '../Components/EmptyStatement';
import Header from '../Components/Header';
import AnalysisModal from '../Components/Modals/AnalysisModal';
import AnalyzeModal from '../Components/Modals/AnalyzeModal';
import MultipleUpload from '../Components/Modals/MultipleUpload';
import SingleUpload from '../Components/Modals/SingleUpload';
import Statements from '../Components/Statements';

const BankStatement = () => {
    const [showSingleUploadModal, setShowSingleUploadModal] = useState(false)
    const [showMultipleUploadModal, setShowMultipleUploadModal] = useState(false)
    const [statementCount, setStatementCount] = useState(0)
    const [showAnalyzeModal, setShowAnalyzeModal] = useState(false)
    const [showAnalysis, setShowAnalysis] = useState(false)


    return (
        <div>
            <Header 
                handleSingleUploadModal = {setShowSingleUploadModal}
                handleMultipleUploadModal = {setShowMultipleUploadModal}
                statementCount={statementCount}
            />
            {statementCount === 0 
            ?
                <EmptyStatement />
            :
                <Statements 
                    count={statementCount}
                    setStatementCount={setStatementCount}
                    setShowAnalyzeModal={setShowAnalyzeModal}
                />
            }
            <SingleUpload 
                show={showSingleUploadModal}
                setShow={setShowSingleUploadModal}
                count={statementCount}
                setStatementCount={setStatementCount}
            />
            <MultipleUpload 
                show={showMultipleUploadModal}
                setShow={setShowMultipleUploadModal}
                count={statementCount}
                setStatementCount={setStatementCount}
            />
            <AnalyzeModal
                show={showAnalyzeModal}
                setShow={setShowAnalyzeModal}
                setShowAnalysis={setShowAnalysis}
            />
            <AnalysisModal
                show={showAnalysis}
                setShow={setShowAnalysis}

            />
        </div>
    )
}

export default BankStatement
