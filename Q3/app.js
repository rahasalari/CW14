function sumSelected() {
    let isChecked = $("input:checked").length;
    $("#sum").text(isChecked);
  }
  sumSelected();
  
  $("input[type=checkbox]").click(function () {
    sumSelected();
  });