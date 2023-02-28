import Plante from "./plant";

 interface User {
    id : number;
    name : string;
    email : string;
    avatar : string | null;
    address : string;
    firstName : string;
    lastName : string;
    role: "user" | "expert";
}


export default User;
