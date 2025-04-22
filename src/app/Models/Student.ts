


 export class Student {
    name? : string;
    age?: number;
    email? : string;
    adress : Adress = new Adress();

 }


 export class Adress {
    city? : string;
    street? : string;
    zip? : number;

}