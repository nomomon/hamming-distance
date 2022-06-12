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
            <div id='context'>
                <h1>Hamming Distance</h1>
                <p>This is a Hamming distance visualizator for integer numbers of length 5. First, numbers are sorted in an ascending order. Then, the  distance is computed. The Hamming distance between two numbers is the number of different digits in similar decimal places. To run the algorithm, type at least two numbers into the list.</p>
            </div>

            {NumberInput({ requiredNumberLength: 5, list, setList, setColor, setRun })}
            {NumberList({ list, setList, color, setColor, run })}
            {RunAlgorithm({ list, setList, color, setColor, run, setRun })}
            {HammingDistanceTable({ color, run })}
        </div>
    );
}

export default App;
