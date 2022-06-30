import styled from 'styled-components'
import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    ${mobile({padding: "0px", flexDirection: "column", marginTop: "30px"})}
`

const Categories = () => {
  return (
    <Container>
        {categories.map((item) => (
            <CategoryItem key={item.id} item={item}></CategoryItem>
        ))}
    </Container>
  )
}

export default Categories