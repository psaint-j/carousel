import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import styled from 'styled-components';
import MovieCard from '../components/card';
import Slider from "react-slick";
import {ArrowRight} from '../icons/arrowRight'
import {ArrowLeft} from '../icons/arrowLeft'



const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 20px auto;
  justify-content: center;
  flex-direction: column;
`;

const NextArrow = styled(ArrowRight)`
  width: 48px;
  height: 48px;
  z-index: 1;
`

const PrevArrow = styled(ArrowLeft)`
  width: 48px;
  height: 48px;
  z-index: 1;
`

const CardWrapper = styled.div`
  width: 200px;
  height: auto;
  padding: 10px;
`

export default function Index({items}) {

  console.log({items});

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  
  return (
    <Container className="flex h-screen">
      <div>
        <Slider {...settings}>
            {items.map((item) => <CardWrapper key={item.id}><MovieCard src={item.thumnail.url} title={item.name} /></CardWrapper>)}
        </Slider>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'https://tf1-interview.hasura.app/v1/graphql',
    cache: new InMemoryCache()
  });

  const {data} = await client.query({
    query: gql`
      query Program {
        program(order_by: {created_at: asc}, limit: 10) {
          id
          name
          thumnail {
            url
          }
        }
      }
    `
  })

  console.log({data})

  return {
    props: {
      items: data.program.filter((a) => a.thumnail.url)
    }, // will be passed to the page component as props
  }
}
