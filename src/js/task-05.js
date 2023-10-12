const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById('name-output');

const greetName = (e) => {
    if (e.target.value.length !== 0) {
        nameOutput.textContent = e.target.value;
        return;
    }

    nameOutput.textContent = 'Anonymous';
}

nameInput.addEventListener('input', greetName);