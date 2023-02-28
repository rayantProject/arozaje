import User from './user';
interface Plant {
    id: string;
    specie : string;
    description: string;
    images : string[];
    owner: User;
    renter : User | null;
}

export default Plant;