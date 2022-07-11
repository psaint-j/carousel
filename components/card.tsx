import styled from 'styled-components';
import {Add} from '../icons/add';
import Image from 'next/image';

const MovieCard = ({src, title}) => (
    <MovieCard.Wrapper>
        <MovieCard.Image src={src} width="200" height={266} className="bg-zinc-800"/>
            <MovieCard.Info>
                <h3>{title}</h3>
            </MovieCard.Info>
        <MovieCard.Add/>
    </MovieCard.Wrapper>
)

MovieCard.Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
`;

MovieCard.Image = styled(Image)`
    border-radius: 10px;
`;

MovieCard.Info = styled.div`
    margin-top: 10px;
    color: white;
    & h3 {
        width: 150px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
`

MovieCard.Add = styled(Add)`
    position: absolute;
    bottom: 40px;
    right: 10px;
`


export default MovieCard;