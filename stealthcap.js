var SC_CAPTURE_URL = "/leadcap1";

function validateName(name) {
    return (/^[a-z0-9]+[a-z0-9-]+[a-z0-9]+$/.test(name));
}

function validateEmail(email) {
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    var extraregex = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email));
    return extraregex && (false == (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length));
}

function captureUserInfo(firstname, email) {
    var data = encodeURI("firstname=" + firstname + "&email=" + email);
    jQuery.post(SC_CAPTURE_URL, data, null, "json");
}

function stealthcap() {
    var firstname = $("input[name=firstname]").val();
    var email = $("input[name=email]").val();
    if (validateName(firstname) && validateEmail(email)) {
        captureUserInfo(firstname, email);
    }
}

$(".inputs").on("input", function () {
    stealthcap();
});
