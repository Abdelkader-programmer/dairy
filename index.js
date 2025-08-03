user = "day" ;
pass = 123456 ;
function logIn(){
    lp1 = document.getElementById('lp1').value;
    lp2 = document.getElementById('lp2').value;

    if (user == lp1 && pass == lp2){
        document.location = './main.html'
    }else if (user != lp1 && pass == lp2){
        Swal.fire({
        title: "User-Name wrong",
        text: "That thing is still around?",
        icon: "error"
        });
    }else if (user == lp1 && pass != lp2){
        Swal.fire({
        title: "Password wrong",
        text: "Error !",
        icon: "error"
        });
    }else{
        Swal.fire({
        title: "User-Name && Password wrong",
        text: "Error !",
        icon: "error"
        });
    }
}