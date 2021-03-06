function forget() {
    $("#forgetBoxTitle").text("修改密码"), $("#forgetBox").show()
}

function forgetClose() {
    $("#errorinfo").text(""), $("#forgetBox").hide()
}

function alertError(a) {
    if (!($("#errorPrompt").length > 0)) {
        var b = " <div class='alert alert-danger alert-dismissible' id='errorPrompt' style='width:20%;margin-left: 40%;height: 50px;line-height: 50px;padding-top: 0;'><i class='icon fa fa-ban' ></i> " + a + "</div>";
        $(".main-header").append(b), setTimeout(function () {
            $("#errorPrompt").remove()
        }, 2e3)
    }
}

function alertSuccess(a) {
    if (!($("#successPrompt").length > 0)) {
        var b = " <div class='alert alert-success alert-dismissible' id='successPrompt' style='width:20%;margin-left: 40%;height: 50px;line-height: 50px;padding-top: 0;'><i class='icon fa fa-check' ></i> " + a + "</div>";
        $(".main-header").append(b), setTimeout(function () {
            $("#successPrompt").remove()
        }, 2e3)
    }
}

function alertWarning(a) {
    if (!($("#warningPrompt").length > 0)) {
        var b = " <div class='alert alert-warning alert-dismissible' id='warningPrompt' style='width:20%;margin-left: 40%;height: 50px;line-height: 50px;padding-top: 0;'><i class='icon fa fa-warning' ></i> " + a + "</div>";
        $(".main-header").append(b), setTimeout(function () {
            $("#warningPrompt").remove()
        }, 2e3)
    }
}

function removeAlertPrompt() {
    $("#successPrompt").remove(), $("#warningPrompt").remove(), $("#errorPrompt").remove()
}

function alertProcessEnd(a) {
    $("#processPrompt").html("<i class='icon-ok green'></i>" + a), setTimeout(function () {
        $("#successPrompt").remove()
    }, 2e3)
}

function hideLoading(a) {
    loadingPages.indexOf(a) >= 0 && loadingPages.removeData(loadingPages.indexOf(a)), $("#ossloadmin").hide()
}

function showPageLoading(a) {
    loadingPages.push(a), $("#ossloadmin").show()
}

function showLoading(a, b) {
    "panel.html" != b.split("?")[0] && (loadingPages.push(a), $("#ossloadmin").show())
}

function initNavClick() {
    $(".nav span[name='tabspan']").unbind("click").click(function () {
        openPage($(this).attr("flag"), $(this).attr("page"), $(this).attr("pageName"))
    }), $(".tabclose").unbind("click").click(function () {
        closePage($(this).attr("flag"))
    })
}

function actionPage(a, b, c, d) {
    openPage(b, c, d), null != a && crrentMenuID != a && ($("#" + crrentMenuID).removeClass("active"), crrentMenuID = a, $("#" + crrentMenuID).addClass("active"))
}

function closePage(a) {
    a.indexOf("xmcj") > -1 || a.indexOf("xmbj") > -1 ? ($("#tab" + currentTab).attr("class", ""), $("#tab" + a).attr("class", "active"), showDialog(a)) : close(a)
}

function showDialog(a) {
    $("#dialog_div").show(), $("#commit").attr("page", a), $("#close").attr("page", a), $("#close_icon").attr("page", a)
}

function close(a) {
    hideLoading(a), $("#tab" + a).remove(), $("#frame" + a).remove(), tabs.splice(tabs.indexOf(a), 1), currentTab == a ? (currentTab = tabs[tabs.length - 1], $("#tab" + currentTab).attr("class", "active"), $("#frame" + currentTab).show()) : currentTab = tabs[tabs.length - 1]
}

function reloadPage(a, b, c) {
    -1 != $.inArray(a, tabs) ? (currentTab != a && openPage(a, b, c), loadPage(a, b)) : openPage(a, b, c)
}

function reloadPageByCloseCurrent(a, b, c) {
    $("#tab" + currentTab).remove(), $("#frame" + currentTab).remove(), tabs.splice(tabs.indexOf(currentTab), 1), -1 != $.inArray(a, tabs) ? (currentTab != a && openPage(a, b, c), loadPage(a, b)) : openPage(a, b, c)
}

function openPage(a, b, c) {
    if (currentPageId = a, loadingPages.indexOf(a) >= 0 ? $("#ossloadmin").show() : $("#ossloadmin").hide(), -1 != $.inArray(a, tabs))
        if (currentTab == a) {
            var d = $(window).height();
            $("#frame" + currentTab).attr("style", "width: 100%;border-width: 0;height:" + (d - 148) + "px")
        } else {
            "" != currentTab && ($("#tab" + currentTab).attr("class", ""), $("#frame" + currentTab).hide()), currentTab = a, $("#tab" + currentTab).attr("class", "active");
            var d = $(window).height();
            $("#frame" + currentTab).attr("style", "width: 100%;border-width: 0;height:" + (d - 148) + "px"), $("#frame" + currentTab).show()
        }
    else {
        $("#milContent").append("<iframe id='frame" + a + "' name='frame" + a + "' allowfullscreen></iframe>"), "" != currentTab ? ($("#tab" + currentTab).attr("class", ""), $("#frame" + currentTab).hide(), $("#milTab").append("<li class='active' id='tab" + a + "'><a href='#' style='padding: 0;overflow: hidden;' data-toggle='tab'><span name='tabspan' flag='" + a + "' page='" + b + "' pageName='" + c + "');\" style='display: block;float: left;    padding: 10px 35px 10px 15px;'>" + c + "</span>  <span class='tabclose' flag='" + a + "');\"><i class='close1'></i><i class='close2'></i></span></a></li>")) : $("#milTab").append("<li class='active' id='tab" + a + "'><a href='#' style='padding: 0;overflow: hidden;' data-toggle='tab'><span name='tabspan' flag='" + a + "' page='" + b + "' pageName='" + c + "');\" style='display: block;float: left;    padding: 10px 15px 10px 15px;' >" + c + "</span></a></li>"), currentTab = a, tabs.push(a);
        var d = $(window).height();
        $("#frame" + a).attr("style", "overflow-y:auto;width: 100%;border-width: 0;height:" + (d - 148) + "px"), loadPage(a, b), $("#milTab").removeAttr("onclick"), initNavClick()
    }
}

function loadPage(a, b) {
    showLoading(a, b);
    var c = document.getElementById("frame" + a);
    c.src = b;
    var d = $(window).height();
    $("#frame" + a).attr("style", "overflow-y:auto;width: 100%;border-width: 0;height:" + (d - 148) + "px"), c.attachEvent ? c.attachEvent("onload", function () {
        afterLoadedIframe(c, a)
    }) : c.onload = function () {
        afterLoadedIframe(c, a)
    }
}

function afterLoadedIframe(a, b) {
    hideLoading(b), a.contentWindow.location.href.indexOf("/admin/login") > 0 && top.location.reload()
}

function obj2string(a) {
    var b = [];
    if ("string" == typeof a) return '"' + a.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"';
    if ("object" == typeof a) {
        if (a.sort) {
            for (var c = 0; c < a.length; c++) b.push(obj2string(a[c]));
            b = "[" + b.join() + "]"
        } else {
            for (var c in a) b.push(c + ":" + obj2string(a[c]));
            document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(a.toString) && b.push("toString:" + a.toString.toString()), b = "{" + b.join() + "}"
        }
        return b
    }
    return a.toString()
}

function loginOut() {
    $.ajax({
        type: "POST",
        url: "loginOut",
        data: "",
        success: function (a) {
            window.location.reload()
        }
    })
}

function checkPower(a) {
    $.ajax({
        type: "POST",
        url: "../Login/checkPower",
        data: {
            page: a,
            account: hex_md5(account)
        },
        success: function (a) {
            "ERROR" == a && window.location.reload()
        }
    })
}
var currentPageId, loadingPages = new Array;
Array.prototype.removeData = function (a) {
    if (isNaN(a) || a > this.length) return !1;
    for (var b = 0, c = 0; b < this.length; b++) this[b] != this[a] && (this[c++] = this[b]);
    this.length -= 1
};
var crrentMenuID = "",
    currentTab = "",
    tabs = [];
$(".sidebar-menu a[name='menu']").click(function () {
    actionPage($(this).attr("menuId"), $(this).attr("flag"), $(this).attr("page"), $(this).attr("pageName"))
}), $("#osslogo").click(function () {
    openPage($(this).attr("flag"), $(this).attr("page"), $(this).attr("pageName"))
}), openPage($("#osslogo").attr("flag"), $("#osslogo").attr("page"), $("#osslogo").attr("pageName")), $(".sidebar").hover(function () {
    $("body").hasClass("sidebar-collapse") && ($(".slimScrollDiv").css("width", "230px"), $(".slimScrollBar").css("right", "0px"), $(".slimScrollBar").css("left", "46px"), $("li.active").addClass("hihome"), $("li.active").removeClass("active"), $(".treeview").css("border-bottom", "1px solid transparent"), $(".treeview").css("width", "52px"), $(".treeview-menu").css("background", "#f5f5f5"))
}, function () {
    $("body").hasClass("sidebar-collapse") && ($(".slimScrollDiv").css("width", "auto"), $(".slimScrollBar").css("right", "1px"), $(".slimScrollBar").css("left", "0px"), $("li.hihome").addClass("active"), $("li.hihome").removeClass("hihome"), $(".treeview").css("border-bottom", "1px solid #e4e4e4"), $(".treeview").css("width", "100%"), $(".treeview-menu").css("background", "#fff"))
}), $(document).ready(function () {
    $(window).resize(function () {
        var a = $(window).height();
        $("#frame" + currentPageId).attr("style", "overflow-y:auto;width: 100%;border-width: 0;height:" + (a - 148) + "px")
    })
});