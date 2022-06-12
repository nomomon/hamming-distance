function sum(a) {
    let i = 0;
    a.forEach(el => i += el)
    return i;
}

function HammingDistanceTable({ color, run }) {
    if (!run) return <span></span>;

    const hammingDistances = color.map(a => sum(a))
    hammingDistances.pop();
    return (
        <div id="hammingDistanceTable">
            <b>Hamming Distance</b>
            {
                hammingDistances.map(d => (
                    <div className="hammingDistance">
                        {d}
                    </div>
                ))
            }
        </div>
    )
}

export default HammingDistanceTable;