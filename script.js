function bionic(str) {
    let beseda = str.split(" ");
    let bold = [];
    for (let i = 0; i < beseda.length; i++) {
        let crke = "";
        for (let j = 0; j < beseda[i].length / 2; j++) {
            crke += beseda[i][j];
        }
        let ostalo = beseda[i].slice(crke.length);
        let koncna = "<b>" + crke + "</b>" + ostalo;
        bold.push(koncna);
    }
    return bold.join(" ");
}

document.body.innerHTML = bionic(document.body.innerHTML);

document.getElementById("").addEventListener("onclick", fontdropdown)
function fontdropdown() {
    document.getElementById("").style.display = "block"
}


document.getElementById("font").addEventListener("onclick", comicsans)

function comicsans() {
    document.getElementsByTagName("div").style.fontFamily = "Comic Sans MS"
}


