import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
`
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
    margin-top: 40px;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
`
const Title = styled.h1`
    margin-bottom: 30px;
    font-weight: bold;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#f3e6e6"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
`





const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Essentials by Sara Sheryar</Logo>
            <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam.
            </Description>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook></Facebook>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter></Twitter>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest></Pinterest>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram></Instagram>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mens Fashion</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>
                <ListItem>Home</ListItem>

            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight: "10px"}}/>622 Dixie Path, South Mumbai 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight: "10px"}}/>4389212814
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/> ibrahimnaveed080@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer