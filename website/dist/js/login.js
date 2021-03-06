function refreshimg() {
    var a = "captcha?id=" + Math.random();
    $(".codeimg").attr("src", a)
}

function login() {
    showLoadingBtn(), check() ? $.ajax({
        url: "login",
        method: "post",
        data: {
            user_account: account,
            user_password: hex_md5(passWd),
            code: code
        },
        success: function (a) {
            1 == a.result ? window.location.href = "main.html" : ($("#errorinfo").text(a.msg), refreshimg())
        },
        error: function () {
            $("#errorinfo").text("登录失败,请重试！")
        },
        complete: function () {
            hideLoadingBtn()
        }
    }) : hideLoadingBtn()
}

function check() {
    return account = $("#account").val().trim(), passWd = $("#password").val().trim(), code = $("#code").val().trim(), "" == account ? ($("#errorinfo").text("账号不能为空！"), $("#account").focus(), !1) : "" == passWd ? ($("#errorinfo").text("密码不能为空！"), $("#password").focus(), !1) : "" == code ? ($("#errorinfo").text("图形验证码不能为空！"), $("#code").focus(), !1) : 4 == code.length || ($("#errorinfo").text("图形验证码不正确！"), $("#code").focus(), !1)
}

function showLoadingBtn() {
    $("#errorinfo").text(""), $(".btninput").hide(), $(".btnloading").show()
}

function hideLoadingBtn() {
    $(".btnloading").hide(), $(".btninput").show()
}
var account, passWd, code;
$(function () {
    document.onkeydown = function (a) {
        13 == (document.all ? window.event : a).keyCode && $("#loginbtn").click()
    }
});