

$( document ).ready(function() {
    /*  //Download jq format currency dude, call it on index and save it on vendors. nice!
    $("mtFildset").on("blur",".currency", function(){
        $(".currency").formatCurrency({
            region            : 'es-ES',
            symbol            : '€',
            positiveFormat    : '%n %s',
            negativeFormat    : '-%n %s',
            decimalSymbol     : ',',
            digitalSymbolGroup: '.',
            groupDigits       : true
    
        });
    })
    */
    
    $("#inputDni").click(function(){
        event.preventDefault();
        let dni      = $("#Dni").val();
        let name     = $("#Name").val();
        let surname  = $("#Surname").val();
        let phone    = $("#Phone").val();
        let birthday = $("#Birthday").val();
        let salary   = $("#Salary").val();

        let objEmployee = new Employee(dni, name, surname, phone, birthday, salary)
        objEmployee.printInfo();
    });
});