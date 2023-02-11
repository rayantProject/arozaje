import   Commentaire   from   './commentaire' ;

interface Plante {
    id: number;
    name: string;
    description: string;
    photos: [];
    commentaires: Commentaire[];
}

export default Plante;