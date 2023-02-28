import User from "./user";
import Plant from "./plant";
import Message from "./message";


interface Discussion {
    id: string;
    plant: Plant;
    messages: Message[];
}

export default Discussion;