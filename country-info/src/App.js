import React, { useState } from 'react';
import Input from './components/input page/input'; 
import Table from './components/table page/table'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [fetchedData, setFetchedData] = useState(null); 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Input setFetchedData={setFetchedData} />} 
          />
          <Route
            path="/table"
            element={<Table fetchedData={fetchedData} />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;




