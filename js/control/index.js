

$(document).ready(function(){

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