
// VELIKOST TÝHLE ABOMINACE JE 6x6


    let pecksess = [];
    let schown = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let egzisc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    let i;
    let e;
    let jinyiks;
    let table;
    let row;
    let cell;
    let j;
    let sansundertale;
    let imput1 = 999999;
    let imput2 = 888888;
    let undertale;
    let kytkazundertale;
    let deltarune = 0;
    let nco = 0;
    let vorech = 0;

    setTimeout(boot, 1000);

function boot(){
    whatareyoudoingwithyourlife();
    console.log(egzisc);
    console.log(pecksess);
    genpexshowjust();
    kytkazundertale = document.getElementById("top");
    kytkazundertale.innerText = "Pekseso";
    kytkazundertale.classList -= "zbunk";
}

function dibagr() {
    debugger
}

function whatareyoudoingwithyourlife() {

    egzisc = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (i = 0; i < 2; i++) {
        if (existcheck("🆗") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("⏸") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("☑") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("🚺") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("🚹") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("🚻") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("☯") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("❎") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("✝") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("☮") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("☪") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("♾") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("✡") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("🆎") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("🆘") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("🅰") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("🅱") === false) {
            i--;
        }
    }

    for (i = 0; i < 2; i++) {
        if (existcheck("🅾") === false) {
            i--;
        }
    }

}

function genpexshowall() {

    jinyiks = document.getElementById("tajbel");
    table = document.createElement('table');
    nco = 0;

    while (jinyiks.childNodes.length > 0) {
        jinyiks.removeChild(jinyiks.childNodes[0])
    }

    for (i = 0; i < (pecksess.length / 6); i++) {
        row = document.createElement('tr');
        for (j = 0; j < 6; j++) {
            cell = document.createElement('td');
            cell.innerText = pecksess[nco];
            cell.classList = "zbunk";
            row.appendChild(cell);
            nco++;
        }
        table.appendChild(row);
    }

    jinyiks.appendChild(table);
}

function existcheck(lettrer) {

    e = Math.floor(Math.random() * 37);
    e--;
    if (egzisc[e] === 0) {
        pecksess[e] = lettrer;
        egzisc[e] = 1;
        return true;
    } else {
        return false;
    }
}

function genpexshowjust() {
    jinyiks = document.getElementById("tajbel");
    table = document.createElement('table');
    nco = 0;

    while (jinyiks.childElementCount > 0) {
        jinyiks.removeChild(jinyiks.childNodes[0])
    }

    for (i = 0; i < (pecksess.length / 6); i++) {
        row = document.createElement('tr');
        for (j = 0; j < 6; j++) {
            cell = document.createElement('td');

            if (schown[nco] === 1) {
                cell.innerText = pecksess[nco];
            }
            else if (schown[nco] === 2) {
                cell.innerText = pecksess[nco];
            }
            else {
                cell.innerText = "⬛";
            }

            cell.classList = "zbunk";
            cell.id = nco;
            row.appendChild(cell);
            nco++;
        }
        table.appendChild(row);
    }

    jinyiks.appendChild(table);
    theylisten();
}

function reset() {
    kytkazundertale = document.getElementById("top");
    kytkazundertale.removeEventListener("click", reset);
    kytkazundertale = document.getElementById("top");
    kytkazundertale.innerText = "Pekseso";
    deltarune = 0;
    nco = 0;
    vorech = 0;
    schown = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    boot();
}

function puschd(puschdthng) {
    if (vorech === 2) {
        if (schown[puschdthng] === 1) {
            schown[puschdthng] = 0;
            vorech--;
            sansundertale = 1;
        }
    }

    else if (vorech === 1) {
        if (sansundertale === 1) {
            if (schown[puschdthng] === 1) {
                schown[puschdthng] = 0;
                vorech--;
                sansundertale = 0;
            }
        }

        else if (schown[puschdthng] === 0) {
            schown[puschdthng] = 1;
            vorech++;
            imput2 = puschdthng;
            if (pecksess[imput1] === pecksess[imput2]) {
                vorech = 0;
                sansundertale = 0;
                schown[imput1] = 2;
                schown[imput2] = 2;
                imput1 = 999999;
                imput2 = 888888;
            }
            else {
                sansundertale = 1;
            }
        }
    }

    else if (vorech === 0) {
        if (schown[puschdthng] === 0) {
            schown[puschdthng] = 1;
            vorech++;
            imput1 = puschdthng;
        }
    }

    console.log(schown);
    genpexshowjust();

    kytkazundertale = 0;
    for (undertale = 0; undertale < schown.length; undertale++) {
        kytkazundertale = kytkazundertale + schown[undertale];
        console.log("Schown[" + undertale + "] -> " + schown[undertale]);
        console.log("kytkazundertale = " + kytkazundertale);
    }
    console.log(kytkazundertale);
    if (kytkazundertale === 72) {
        kytkazundertale = document.getElementById("top");
        kytkazundertale.innerText = "Ještě jednou?";
        kytkazundertale = document.getElementById("top");
        kytkazundertale.addEventListener("click", reset);
        kytkazundertale.classList += "zbunk";
    }
}

function theylisten() {
    document.getElementById(0).addEventListener("click", () => {puschd(0)});
    document.getElementById(1).addEventListener("click", () => {puschd(1)});
    document.getElementById(2).addEventListener("click", () => {puschd(2)});
    document.getElementById(3).addEventListener("click", () => {puschd(3)});
    document.getElementById(4).addEventListener("click", () => {puschd(4)});
    document.getElementById(5).addEventListener("click", () => {puschd(5)});
    document.getElementById(6).addEventListener("click", () => {puschd(6)});
    document.getElementById(7).addEventListener("click", () => {puschd(7)});
    document.getElementById(8).addEventListener("click", () => {puschd(8)});
    document.getElementById(9).addEventListener("click", () => {puschd(9)});
    document.getElementById(10).addEventListener("click", () => {puschd(10)});
    document.getElementById(11).addEventListener("click", () => {puschd(11)});
    document.getElementById(12).addEventListener("click", () => {puschd(12)});
    document.getElementById(13).addEventListener("click", () => {puschd(13)});
    document.getElementById(14).addEventListener("click", () => {puschd(14)});
    document.getElementById(15).addEventListener("click", () => {puschd(15)});
    document.getElementById(16).addEventListener("click", () => {puschd(16)});
    document.getElementById(17).addEventListener("click", () => {puschd(17)});
    document.getElementById(18).addEventListener("click", () => {puschd(18)});
    document.getElementById(19).addEventListener("click", () => {puschd(19)});
    document.getElementById(20).addEventListener("click", () => {puschd(20)});
    document.getElementById(21).addEventListener("click", () => {puschd(21)});
    document.getElementById(22).addEventListener("click", () => {puschd(22)});
    document.getElementById(23).addEventListener("click", () => {puschd(23)});
    document.getElementById(24).addEventListener("click", () => {puschd(24)});
    document.getElementById(25).addEventListener("click", () => {puschd(25)});
    document.getElementById(26).addEventListener("click", () => {puschd(26)});
    document.getElementById(27).addEventListener("click", () => {puschd(27)});
    document.getElementById(28).addEventListener("click", () => {puschd(28)});
    document.getElementById(29).addEventListener("click", () => {puschd(29)});
    document.getElementById(30).addEventListener("click", () => {puschd(30)});
    document.getElementById(31).addEventListener("click", () => {puschd(31)});
    document.getElementById(32).addEventListener("click", () => {puschd(32)});
    document.getElementById(33).addEventListener("click", () => {puschd(33)});
    document.getElementById(34).addEventListener("click", () => {puschd(34)});
    document.getElementById(35).addEventListener("click", () => {puschd(35)});
}