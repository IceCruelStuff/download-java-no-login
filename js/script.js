document.getElementById("input").onsubmit = function() {
    var inputUrl = document.getElementById("url").value;
    inputUrl = inputUrl.split("nexturl=")[1];
    var array = inputUrl.split("otn", 1);
    inputUrl = inputUrl[0] + "otn-hub" + inputUrl[1];
    var fileName = inputUrl.split("/")[8];
    var element = document.createElement('a');
    element.href = inputUrl;
    element.setAttribute("download");
    document.body.appendChild(element);
}
