let form = document.querySelector("#form");
let input = document.querySelector("#text");

form.addEventListener("submit", (e) => {      // e - это ивент, с помощью которого мы можем находить элемент на который мы кликнули например, но не только
    e.preventDefault();  // отменяем отправку данных на сервер, т.к. это форма, данные отправляются по умолчанию, а мы хотим отменить отправку, чтобы не грузить сайт и сервер бесконечно

    let list = JSON.parse(localStorage.getItem("list")) || []; // сохраняем в сторадж наш старый список из second
    list.push(input.value); // добавляем к старому списку, который уже был у нас в файле second новый инпут, добавляем как в массив

    localStorage.setItem("list", JSON.stringify(list));  // теперь измененный массив сохраняем в локал сторадж, если этого не сделать, то наш новый инпут не появится в second
    input.value = ""; // очищаем поле ввода в first
});