function pegarValores(){
    let HTML = "";
    HTML += "<br>name: " + document.getElementById("name").value;
    HTML += "<br>birthday: " + document.getElementById("birthday").value;
    HTML += "<br>time: " + document.getElementById("time").value;
    HTML += "<br>email: " + document.getElementById("email").value;
    HTML += "<br>quantity: " + document.getElementById("quantity").value;
    HTML += "<br>html: " + document.getElementById("html").checked;
    HTML += "<br>css: " + document.getElementById("css").checked;
    HTML += "<br>javascript: " + document.getElementById("javascript").checked;
    HTML += "<br>vehicle1: " + document.getElementById("vehicle1").checked;
    HTML += "<br>vehicle2: " + document.getElementById("vehicle2").checked;
    HTML += "<br>vehicle3: " + document.getElementById("vehicle3").checked;
    var sel = document.getElementById("cars");
    HTML += "<br>select: " + sel.options[sel.selectedIndex].value;
    HTML += "<br>favcolor: " + document.getElementById("favcolor").value;
    HTML += "<br>vol: " + document.getElementById("vol").value;

    document.getElementById("demo").innerHTML = HTML;
}