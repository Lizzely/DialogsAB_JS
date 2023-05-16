// Funkcija, kas pārveido decimālo skaitli uz citu sistēmu
function convert(number, base) {
    return number.toString(base).toUpperCase();
}

// Funkcija, kas pievieno rindu tabulai ar četriem skaitļiem
function addRow(dec, bin, oct, hex) {
    var table = document.getElementById("table");
    var row = document.createElement("tr");
    var cells = [dec, bin, oct, hex];
    for (var i = 0; i < cells.length; i++) {
        var cell = document.createElement("td");
        cell.textContent = cells[i];
        row.appendChild(cell);
    }
    table.appendChild(row);
}

// Cikls, kas izveido tabulu ar pirmajiem 10 decimālajiem skaitļiem
for (var i = 0; i < 10; i++) {
    var dec = i;
    var bin = convert(i, 2);
    var oct = convert(i, 8);
    var hex = convert(i, 16);
    addRow(dec, bin, oct, hex);
}
