

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
*/class Person{
    constructor( dni, name, surname, phone, birthday){
        this._dni      = dni;
        this._name     = name;
        this._surname  = surname;
        this._phone    = phone;
        this._birthday = birthday;
    }
    getDni(){
        return this._dni;
    }
    setDni(dni){
        this._dni = dni;
    }

    getName(){
        return this._name;
    }
    setName(name){
        this._name = name;
    }

    getSurname(){
        return this._surname;
    }
    setSurname(surname){
        this._surname = surname;
    }

    getPhone(){
        return this._phone;
    }
    setPhone(phone){
        this._phone = phone;
    }

    getBirthday(){
        return this._birthday;
    }
    setBirthday(birhday){
        this._birthday = birhday;
    }

    printInfo(){
        console.log("Dni: "+this._dni+", Name: "+this._name+", Surname: "+this._surname+", Phone: "+this._phone+", Birth: "+this._birthday);
    }
}