import hammingDifferenceColoring from './funcs';

function RunAlgorithm({ list, setList, color, setColor, run, setRun }) {
    if (run) return (
        <button id="restart" onClick={() => {
            setColor([]);
            setRun(false);
        }
        }>
            Restart
        </button>
    );

    return (
        <button id="run" onClick={() => {
            if (list.length < 2) {
                alert("Enter at least two numbers")
                return;
            }

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