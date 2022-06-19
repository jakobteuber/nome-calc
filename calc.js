let eng_p = document.getElementById("eng-p");
let dt_p = document.getElementById("dt-p");
let title_div = document.getElementById("chapter-title");
let pages_div = document.getElementById("chapter-pages");
let page_div = document.getElementById("page-no");

let eng = "eng";
let dt = "dt";

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}


function calc(val, source, target) {
    let start = 0;
    let end = 0;
    for (let i = 0; i < toc.length; i++) {
        start = toc[i];
        end = toc[i + 1];
        if (end == undefined) {
            end = start;
        }
        console.log(start[source] + " — " + end[source] + " (" + start[target] + " — " + end[target] +  ")")
        if (start[source] <= val && val < end[source]) {
            console.log(start["title"]);
            let add = val - start[source];
            let ratio = (end[target] - start[target]) / (end[source] - start[source]);
            let result = start[target] + add * ratio;
            title_div.innerHTML = start["title"];
            pages_div.innerHTML = start[source] + " — " + end[source] + "<br>(" + start[target] + " — " + end[target] + ")";
            page_div.innerHTML = "→ p. " + round(result, 1);
        }
    }
}