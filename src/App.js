import NumberInput from './NumberInput';
import NumberList from './NumberList';
import RunAlgorithm from './RunAlgorithm';
import HammingDistanceTable from './HammingDistanceTable';
import React, { useState } from 'react';
import './App.css';

function App() {
    const [list, setList] = useState([]);
    const [color, setColor] = useState([]);
    const [run, setRun] = useState(false);

    return (
        <div className="App">
            {NumberInput({ requiredNumberLength: 5, list, setList, setColor, setRun })}
            {NumberList({ list, setList, color, setColor, run })}
            {RunAlgorithm({ list, setList, color, setColor, run, setRun })}
            {HammingDistanceTable({ color, run })}
        </div>
    );
}

export default App;
