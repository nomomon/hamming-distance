function NumberList({ list }) {
    return (
        <ul id='numberList'>
            {list.map((number, index) => {
                return <li key={index}>{number}</li>;
            })}
        </ul>
    );
}

export default NumberList;
