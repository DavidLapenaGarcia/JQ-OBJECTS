

/*
@name        = Employee.js
@author      = David Lapena Garcia
@version     = 1.0
@description = SClass to save Employee.js
@date        = 10-12-218
@propieties: 0
        dni      = Dni of Employee.
        name     = Name of Employee.
        surname  = Surname of Employee.
        phone    = Phone of Employee.
        birthday = birhday of Employee.
        salary   = Salary od Employee.
*/class Employee extends Person{
    constructor( dni, name, surname, phone, birthday, salary){
        super(dni, name, surname, phone, birthday);
        this._salary = salary;
    }

    getSalary(){
        return this._salary;
    }
    setSalary(salary){
        this._salary = salary;
    }

    printInfo(){
        console.log("Dni: "+this._dni+", Name: "+this._name+", Surname: "+this._surname+", Phone: "+this._phone+", Birth: "+this._birthday+", Salary: "+this._salary);
    }
}