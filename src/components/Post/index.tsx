import { useParams } from 'react-router-dom'
//UseParams é para receber parametros, por exemplo /posts/10. o /10 significa que eu quero o post 10

export const Post = () => {

    const params = useParams();
    const {id} = params;

    return (
        <div>
            <h1>Post {id}</h1>
        </div>
    )
}