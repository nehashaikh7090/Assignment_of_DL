function myFunction() {
  var input, filter, table, tableRow, tableData, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tableRow = table.getElementsByTagName("tr");

  for (var i = 0; i < tableRow.length; i++) {
    tableData = tableRow[i].getElementsByTagName("td")[0];
    if (tableData) {
      txtValue = tableData.textContent || tableData.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tableRow[i].style.display = "";
      } else {
        tableRow[i].style.display = "none";
      }
    }
  }
}
