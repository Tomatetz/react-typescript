export default interface Data {
    greeting? : string;
    friends? : Array < {
        id: number,
        name: string
    } >;
    tags? : Array < string >;
    longitude? : string;
    latitude? : string;
    registered? : string;
    about? : string;
    address? : string;
    phone? : string;
    email? : string;
    company? : string;
    name? : {
        last: string,
        first: string
    };
    eyeColor? : string;
    age? : number;
    picture? : string;
    balance? : string;
    isActive? : boolean;
    guid? : string;
    index? : number;
    _id? : string;
}