import { popularProducts } from "../data";
import Product from "./Product";
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item) => (
            <Product item={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products