var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function setCookie() {
    var cookie = localStorage.getItem('cookie');
    if (cookie) {
        cookie = JSON.parse(cookie);
        if (!cookie.accepted) {
            modal.style.display = "block";
        } else {
            modal.style.display = "none";
        }
        return cookie;
    } else {
        var cookieValue = {
            accepted: false,
            validade: 1,
            valor: {
                usuario: 'exemplo'
            }
        }
        localStorage.setItem('cookie', JSON.stringify(cookieValue));
        modal.style.display = "block";
    }
}
function accept() {
    var cookie = localStorage.getItem('cookie');
    cookie = JSON.parse(cookie);
    cookie.accepted = true;
    localStorage.setItem('cookie', JSON.stringify(cookie));
    modal.style.display = "none";
}
function reject() {
    var cookie = localStorage.getItem('cookie');
    cookie = JSON.parse(cookie);
    cookie.accepted = false;
    localStorage.setItem('cookie', JSON.stringify(cookie));
    modal.style.display = "none";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}