import  User  from './user';

interface Message {
    id: number;
    content: string;
    createdAt: Date;
    user: User;
}

export default Message;