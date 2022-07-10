import styled from 'styled-components';

const MovieCard = ({src, title}) => {

    return (
        <MovieCard.Wrapper>
            <MovieCard.Image src={src} />
            <MovieCard.Info>
                <h3>{title}</h3>
            </MovieCard.Info>
        </MovieCard.Wrapper>
    )
}

MovieCard.Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

MovieCard.Image = styled.img`
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


export default MovieCard;