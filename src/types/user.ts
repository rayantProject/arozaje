import Plante from "./plante";

 interface User {
    id : number;
    name : string;
    email : string;
    password : string;
    avatar : string;
    plantesInGarden : Plante[];
    plantesToKeep : Plante[];
}


export default User;
