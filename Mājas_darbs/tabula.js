  function convertNumber(number, base) {
    return parseInt(number, base).toString(10);
  }

  function createConversionTable() {
    var table = document.getElementById("conversionTable");
    for (var i = 0; i <= 255; i++) {
      var decimal = i.toString(10);
      var binary = i.toString(2);
      var octal = i.toString(8);
      var hexadecimal = i.toString(16).toUpperCase();

      var row = table.insertRow();
      var decimalCell = row.insertCell();
      var binaryCell = row.insertCell();
      var octalCell = row.insertCell();
      var hexadecimalCell = row.insertCell();

      decimalCell.innerHTML = decimal;
      binaryCell.innerHTML = binary;
      octalCell.innerHTML = octal;
      hexadecimalCell.innerHTML = hexadecimal;
    }
  }

  createConversionTable();
  