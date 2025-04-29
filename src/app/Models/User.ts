export class User {
    id!: number ;
    email!: string | null;
    first_name!: string;
    last_name!: string
    avatar!: string
}


// ?  ნიშნავს რომ ან ის ტიპია რასაც ვუთითებ ან undefined

// !  ნიშნავს რომ ობიექტის შექმნისას აუცილებლად მიიღებს მნიშვნელობას და ეს მნიშვნელობა იქნება ის ტიპი რასაც ვუთითებ