function NumberList({ list, setList, color, setColor, run }) {
    function pop(i) {
        let newList = [...list];
        newList.splice(i, 1);
        setList(newList);
    }

    function drawConnection(number_i, digit_i, color) {
        if (color === undefined || color[number_i] === undefined) {
            return '';
        }
        else {
            if (color[number_i][digit_i] === 0) {
                return ''
            }
            else if (color[number_i][digit_i] === 1) {
                return 'connectDown'
            }
            else {
                throw `color doesn't exist "${color[number_i][digit_i]}"`;
            }
        }
    }

    return (
        <ul id='numberList'>
            {list.map((number, number_i) => {
                return (
                    <li key={number_i} className={(!run) ? 'grow' : ''}>
                        {number.split('').map((digit, digit_i) => {
                            return (
                                <span className={drawConnection(number_i, digit_i, color)}>
                                    {digit}
                                </span>
                            )
                        })}
                        {
                            (!run) ? (<button onClick={() => { pop(number_i) }}>X</button>) : ""
                        }
                    </li>
                );
            })}
        </ul>
    );
}

export default NumberList;
