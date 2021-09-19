const input = document.querySelector(".box_input"),
    text1 = document.querySelector(".text1"),
    text2 = document.querySelector(".text2"),
    text3 = document.querySelector(".text3"),
    test1 = document.getElementById("test1"),
    test2 = document.getElementById("test2");

function handleSubmit(event) {

    event.preventDefault();

    var advanced = parseFloat(text1.value)* 0.95 - parseInt(text2.value) * 5;
    var rare = parseFloat(text1.value) * 0.95 - parseInt(text3.value);
    var temp = '고급 1셋 구매 시 마진 : ' + advanced;
    test1.innerHTML = temp;
    temp = '희귀 1셋 구매 시 마진 : ' + rare
    test2.innerHTML = temp;
}


function init() {
    input.addEventListener("submit", handleSubmit);
}


init();