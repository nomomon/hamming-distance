import NumberInput from './NumberInput';
import NumberList from './NumberList';
import RunAlgorithm from './RunAlgorithm';
import React, { useState } from 'react';
import './App.css';

function App() {
    const [list, setList] = useState([]);

    return (
        <div className="App">
            {NumberInput({ requiredNumberLength: 5, list, setList })}
            {NumberList({ list, setList })}
            {RunAlgorithm({ list, setList })}
        </div>
    );
}

export default App;
