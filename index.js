function validasi() {
    const email = document.getElementById("email").value;
    
    if (email != "") {
        console.log(email)
        window.location.assign('sukses.html');
        localStorage.setItem('email', email);
        window.location.href = 'sukses.html';
    } else {
        document.getElementById("warning").style.display = "block";
    }
}

function myFunction() {
    document.getElementById("button2").style.background = "hsl(235, 18%, 26%)";
    document.getElementById("button2").style.boxShadow = "none";

    setTimeout(function() {
        window.location.assign('index.html');
      }, 3000); // 2000 milidetik = 2 detik
}