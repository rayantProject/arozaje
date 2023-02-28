import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

class DataMananger {

    private static apiURI = process.env.API_URI;

    private static instance: DataMananger;
    
    public static getInstance(): DataMananger {
        if (!DataMananger.instance) {
        DataMananger.instance = new DataMananger();
        }
        return DataMananger.instance;
    }
    
    public async getUserData(id :string) : Promise<any> {
        const { data } = await axios.get(`${DataMananger.apiURI}/users/${id}`);
        return data;
    }

    public async getPlantData(id :string) : Promise<any> {
        const { data } = await axios.get(`${DataMananger.apiURI}/plants/${id}`);
        return data;
    }

    public async getDiscussionData(id :string) : Promise<any> {
        const { data } = await axios.get(`${DataMananger.apiURI}/discussions/${id}`);
        return data;
    }


}


export default DataMananger;
