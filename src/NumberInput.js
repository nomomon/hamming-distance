function NumberInput({ requiredNumberLength, list, setList }) {
    function addNumber() {
        let number = document.getElementById("numberInput").value.trim();

        if (number.length === requiredNumberLength && number.match(/^[0-9]+$/)) {
            setList([...list, number]);
            document.getElementById("numberInput").value = "";
        }
        else {
            alert("Please enter a " + requiredNumberLength + " digit number.");
        }
    }
    function addNumberOnEnter(event) {
        if (event.key === "Enter") {
            addNumber();
        }
    }


    return (
        <div id="numberInputBox">
            <input id="numberInput" onKeyDown={addNumberOnEnter} />
            <button id="addNumber" onClick={addNumber}>+</button>
        </div>
    );
}

export default NumberInput;
