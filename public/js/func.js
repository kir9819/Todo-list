// document.ready(function() {
    
// });
function check(t) {
    console.log(t);
    let ch = "";
    if(t.checked) {
        ch = "checked";
    }
    var xhr = new XMLHttpRequest();

        var body = 'id=' + encodeURIComponent(t.id) +
        '&check=' + encodeURIComponent(ch);

        xhr.open("POST", '/changecheck', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // xhr.onreadystatechange = ...;

        xhr.send(body);
}

function deleteTodo(t) {
    console.log(t);
    var xhr = new XMLHttpRequest();

        var body = 'id=' + encodeURIComponent(t.id);

        xhr.open("POST", '/delete', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        // xhr.onreadystatechange = ...;

        xhr.send(body);
}