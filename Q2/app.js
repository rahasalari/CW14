$(document).ready(function () {

    $("select").change(function(){
        
        let text =''
        $("select option:selected").each (function(){
            text += $(this).text()
            
        })
        $("#para").html(text)
    }).trigger("change")
    })