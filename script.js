let fibMax = window.document.getElementById('txtnum');
let res = window.document.getElementById('txtres');

function fibonacci() {
    let number = 0;
    let nextNumber = 1;
    let count = 3;
    res.innerHTML = "0, 1, "
    while (count <= fibMax.value) {
                let nextNextNumber = number + nextNumber;
        res.innerHTML += `${nextNextNumber}, `;
        number = nextNumber;
        nextNumber = nextNextNumber;
        count++;
    }
}