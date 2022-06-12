function NumberInput({ requiredNumberLength, list, setList, setColor, setRun }) {
    function addNumber() {
        let number = document.getElementById("numberInput").value.trim();

        if (number.length === requiredNumberLength && number.match(/^[0-9]+$/)) {
            setList([...list, number]);
            document.getElementById("numberInput").value = "";
        }
        else {
            alert("Please enter a " + requiredNumberLength + " digit number.");
        }
        setRun(false);
        setColor([]);
    }
    function addNumberOnEnter(event) {
        if (event.key === "Enter") {
            addNumber();
        }
    }


    return (
        <div id="numberInputBox">
            <input
                id="numberInput"
                placeholder="e.g. 12345"
                autoFocus={true}
                onKeyDown={addNumberOnEnter}
            />
            <button id="addNumber" onClick={addNumber}>+</button>
        </div>
    );
}

export default NumberInput;
