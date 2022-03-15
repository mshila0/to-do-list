// Нажмите на кнопку "Закрыть", чтобы скрыть текущий элемент списка
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Создайте новый элемент списка при нажатии на кнопку "Добавить"
function newElement() {
    let newDeal = document.createElement("li");
    let inputValue = document.getElementById("mainInput").value;
    let t = document.createTextNode(inputValue);
    newDeal.appendChild(t);
    if (inputValue === '') {
        alert("Нельзя добавить пустоту в качестве вашего дела :(");
    } else {
        document.getElementById("mainUL").appendChild(newDeal);
    }
    document.getElementById("mainInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    newDeal.appendChild(span);

    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}