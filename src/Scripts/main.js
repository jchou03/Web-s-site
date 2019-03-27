var isItDark = false
var theButton = document.getElementById('')

function darkMode() {
    if (isItDark==false) {
        isItDark=true
        document.body.style.backgroundColor='black'
    }   else {
        isItDark=false
        document.body.style.backgroundColor=''
    }
};