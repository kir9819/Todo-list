// document.ready(function() {
    
// });
function check(t) { // update checkbox state
    console.log(t);
    let ch = "";
    if(t.checked) {
        ch = "checked";
    }

    // ajax request

    let xhr = new XMLHttpRequest();
    let body = 'id=' + encodeURIComponent(t.id) +
        '&check=' + encodeURIComponent(ch);
    xhr.open("POST", '/changecheck', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
}

function deleteTodo(t) { // delete todo

    // ajax request

    let xhr = new XMLHttpRequest();
    let body = 'id=' + encodeURIComponent(t.id);
    xhr.open("POST", '/delete', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(body);
    location.reload(true);
}

// function changeTodo(t) {
//     document.getElementById("change").classList.remove('hide');
//     // document.getElementsByName("nameCh").values = 
//     document.g
// }