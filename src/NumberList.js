function NumberList({ list, setList }) {
    function pop(i) {
        let newList = [...list];
        newList.splice(i, 1);
        setList(newList);
    }

    return (
        <ul id='numberList'>
            {list.map((number, index) => {
                return (
                    <li key={index}>
                        {number.split('').map((digit, i) => {
                            return (
                                <span>
                                    {digit}
                                </span>
                            )
                        })}
                        <button onClick={() => { pop(index) }}>X</button>
                    </li>
                );
            })}
        </ul>
    );
}

export default NumberList;
