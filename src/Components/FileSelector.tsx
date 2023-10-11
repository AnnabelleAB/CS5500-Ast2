// FileSelector.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as PortsGlobal from '../ServerDataDefinitions';
const FileSelector: React.FC = () => {
    const [documents, setDocuments] = useState<string[]>([]);
    const serverPort = PortsGlobal.PortsGlobal.serverPort;


    const linkStyle = {
        margin: "1rem",
        // textDecoration: "none",
        color: 'rgb(214, 225, 156)'
      };

    useEffect(() => {
        async function fetchDocuments() {
            try {
                const response = await fetch(`http://localhost:${serverPort}/documents`);
                if (!response.ok) {
                    throw new Error('Network response was not ok' + response.statusText);
                }
                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error('Data is not an array');
                }
                setDocuments(data);
            } catch (error) {
                console.error('Failed to fetch documents', error);
            }
        }
        fetchDocuments();
    }, []);

    return (
        <div>
            <h1>Select a Document</h1>
            <ul className='link'>
                {documents.map(doc => <li key={doc}><Link to={`/${doc}`} style={linkStyle}>{doc}</Link></li>)}
            </ul>
        </div>
    );
};

export default FileSelector;
