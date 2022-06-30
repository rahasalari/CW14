$(document).ready(function () {
    $(".btn").click(function fade(){
        $(".crd3").fadeToggle(1000);
        $(".crd2").fadeToggle(3000);
        $(".crd1").fadeToggle(5000);
    });
});