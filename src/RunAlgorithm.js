import hammingDifference from './funcs';

function RunAlgorithm({ list, setList }) {
    return (
        <button onClick={() => {
            // sort list
            list.sort((a, b) => Number(a) - Number(b))
            setList([...list]);
        }}>
            Run Algorithm
        </button>
    );
}

export default RunAlgorithm;