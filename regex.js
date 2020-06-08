function sr(cs) {
    var ip = document.getElementById("input").value;
    var wr = document.getElementById("word").value;

    var i;
    var b;
    document.getElementById("sensible").checked ? i = "i" : i = "";
    document.getElementById("exact").checked ? b = "\\b" : b = "";

    var rg = new RegExp(b + wr + b, "gm" + i);

    switch (cs) {
        case "search":
            var txt = "";
            var c = 0;
            while (rg.test(ip)) {
                txt += "Coindencia en: " + (rg.lastIndex - wr.length + 1) + "<br>";
                c++;
            }
            txt == "" ? txt = "Sin coincidencias" : txt;
            document.getElementById("output").innerHTML = txt + "<br>" + "Total de coincidencias: " + c;
            break;
        case "replace":
            var rp = document.getElementById("replace").value;
            document.getElementById("input").value = ip.replace(rg, rp);
            break;
        case "total":
            rg = new RegExp(b + "\\w+" + b, "gm" + i);
            var cc = 0;
            while (rg.test(ip)) {
                cc++;
            }
            document.getElementById("output").innerHTML = "Total de coincidencias: " + cc;
            break;

    }
}