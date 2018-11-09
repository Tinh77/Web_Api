var LOGIN_API = "https://2-dot-backup-server-002.appspot.com/_api/v2/members/authentication";
var btnSubmit = document.forms['register-form']['btn-submit'];
if (btnSubmit != null){
    btnSubmit.onclick = function () {
        var txtEmail = document.forms['register-form']['email'];
        var txtPassword = document.forms['register-form']['password'];
        if (txtEmail != null && txtPassword != null){
            var email = txtEmail.value;
            var password = txtPassword.value;

            var jsMember = {
                email: email,
                password: password,
            }
            var jsonData = JSON.stringify(jsMember);
            postLoginRequest(jsonData);
        }
    }
}

function postLoginRequest(jsonData) {
    var xmlHttpRequest = new  XMLHttpRequest();
    xmlHttpRequest.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 201){
            var member = JSON.parse(this.responseText);
            localStorage.setItem('token', member.token);
            location.href = "the-latest-song";
        }
    }
    xmlHttpRequest.open('POST', LOGIN_API, true);
    xmlHttpRequest.setRequestHeader('Content-type','application/json');
    xmlHttpRequest.send(jsonData);
}