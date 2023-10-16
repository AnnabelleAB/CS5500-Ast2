import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import SpreadSheet from './Components/SpreadSheet';
import FileSelector from './Components/FileSelector';
import Header from './Components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
      <Header/>
        <header className="App-main">
          <Routes>
            <Route path="/" element={<FileSelectorWrapper />} />
            <Route path="/:doc" element={<SpreadSheetWrapper />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

const FileSelectorWrapper: React.FC = () => {
  return <FileSelector />;
}

const SpreadSheetWrapper: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [documentName, setDocumentName] = useState<string>('');

  useEffect(() => {
    const docNameFromURL = getDocumentNameFromWindow();
    if (!docNameFromURL) {
      navigate('/');
    } else {
      setDocumentName(docNameFromURL);
    }
  }, [location.pathname, navigate]);

  function getDocumentNameFromWindow() {
    const path = location.pathname.substring(1);
    return path || '';
  }

  return <SpreadSheet documentName={documentName} />;
}

export default App;
