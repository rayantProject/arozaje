import Plante from "./plant";

 interface User {
    id : number;
    name : string;
    password : string;
    email : string;
    avatar? : string ;
    address : string;
    firstName : string;
    lastName : string;
    role: "user" | "expert";
}


export default User;
