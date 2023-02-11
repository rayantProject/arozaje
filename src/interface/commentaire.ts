import User from "./user";

interface Commentaire {
    date : Date;
    author : User;
    content : string;
}

export default Commentaire;