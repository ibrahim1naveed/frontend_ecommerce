import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { mobile } from '../responsive';

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 800;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`
const Topbutton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`
const TopTexts = styled.div`
    ${mobile({display: "none"})}
`
const TopText = styled.span`
   text-decoration: underline;
   cursor: pointer; 
   margin: 0px 10px;
`
const Bottom = styled.div`  
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const Info = styled.div`
    flex: 3;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;

`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "24px"};
`
const SummaryText = styled.span`
`
const SummaryPrice = styled.span`
`
const SummaryButton = styled.button`
   width: 100%;
   background-color: black;
   color: white;
   padding: 10px;
   font-weight: 600;
`

const Product = styled.div` 
    display: flex;
    justify-content: space-between;
    ${mobile({flexDirection: "column"})}
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color} ;
`
const ProductSize = styled.span`

`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`
const Amount = styled.span`
    font-size: 24px;
    margin: 5px;
    ${mobile({margin: "5px 15px"})}
`
const Price = styled.span`
    font-size: 30px;
    font-weight: 200;
    ${mobile({marginBottom: "20px"})}
`

const Hr = styled.hr`
    background-color: #eee;
    height: 1px;
    border: none;
`




const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
            <Top>
                <Topbutton>CONTINUE SHOPPING</Topbutton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <Topbutton type="filled">CHECKOUT NOW</Topbutton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png"></Image>
                            <Details>
                                <ProductName><b>Product:</b> BROWN OVERCOAT</ProductName>
                                <ProductId><b>ID:</b> 29282911</ProductId>
                                <ProductColor color="brown"></ProductColor>
                                <ProductSize><b>Size:</b> Medium</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer>
                                <Add/>
                                <Amount>2</Amount>
                                <Remove/>
                            </AmountContainer>
                            <Price>$ 35</Price>
                        </PriceDetail>
                    </Product>

                    <Hr></Hr>

                    <Product>
                        <ProductDetail>
                            <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Rocket-Vintage-Chill-Cap_66374_1_lg.png"></Image>
                            <Details>
                                <ProductName><b>Product:</b> LIFE IS GOOD HAT</ProductName>
                                <ProductId><b>ID:</b> 29282911</ProductId>
                                <ProductColor color="grey"></ProductColor>
                                <ProductSize><b>Size:</b> Medium</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer>
                                <Add/>
                                <Amount>2</Amount>
                                <Remove/>
                            </AmountContainer>
                            <Price>$ 20</Price>
                        </PriceDetail>
                    </Product>


                </Info>
                <Summary>
                    <SummaryTitle>
                        ORDER SUMMARY
                    </SummaryTitle>

                    <SummaryItem>
                        <SummaryText>Subtotal</SummaryText>
                        <SummaryPrice>$ 80</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Estimated Shipping</SummaryText>
                        <SummaryPrice>$ 5.90</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryText>Shipping Discount</SummaryText>
                        <SummaryPrice>$ -5.90</SummaryPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummaryText>Total</SummaryText>
                        <SummaryPrice>$ 80</SummaryPrice>
                    </SummaryItem>
                    <SummaryButton>CHECKOUT NOW</SummaryButton>
                </Summary>
                
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart