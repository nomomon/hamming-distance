import hammingDifferenceColoring from './funcs';

function RunAlgorithm({ list, setList, color, setColor, run, setRun }) {
    if (run) return (
        <button onClick={() => {
            setColor([]);
            setRun(false);
        }
        }>
            Restart
        </button>
    );

    return (
        <button onClick={() => {
            // sort list
            list.sort((a, b) => Number(a) - Number(b))
            setList([...list]);

            // visualise hamming difference
            color = []
            for (let i = 0; i < list.length; i++) {
                color[i] = hammingDifferenceColoring(
                    list[i],
                    (i + 1 < list.length) ? list[i + 1] : null
                );
            }
            setRun(true)
            setColor([...color])
        }}>
            Run Algorithm
        </button>
    );
}

export default RunAlgorithm;