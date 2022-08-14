import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import { mobile, others } from '../responsive';

const Container=styled.div`
display:flex;
${mobile({flexDirection:"column"})}
${others({flexDirection:"column"})}
`



const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
padding:20px;

`

const Center=styled.div`
flex:1;
padding:20px; 
${mobile({display:"none"})}
`
const Right=styled.div`
flex:1;
padding:20px;
${mobile({backgroundColor:"#eee"})}`

const Logo=styled.h1`
font-weight:bold;`

const Desc=styled.p`
margin:20px 0px;
`
const SocialContainer=styled.div`
display:flex;
`
const SocialIcon=styled.div`
display:flex;
width:40px;
height:40px;
border-radius:50%;
color:white;
background-color:#${props=>props.color};
align-items:center;
justify-content:center;
margin:4px;
`

const Title=styled.h3`
margin-bottom:30px;`
const List=styled.ul`
margin:0;
padding:0;
List-style:none;
display:flex;
flex-wrap:wrap;`

const ListItem=styled.li`
width:50%;
margin-bottom:10px;`

const ContactItem=styled.div`
margin-bottom:20px;
display:flex;
align-items:center;`

const PaymentIcon=styled.img``

const Footer = () => {
  return (
    <Container>

        <Left>
        <Logo>
                DHUKAAN
            </Logo>
            <Desc>
        This is a project developed by Jangapalli Vyaskumar in 2022
        Our goal is to build a original one in the coming years.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                <FacebookIcon/>

                </SocialIcon>
                <SocialIcon color="E4405F">
                <InstagramIcon/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                <TwitterIcon/>
                </SocialIcon>
                <SocialIcon color="E60023">
                <PinterestIcon/>
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>WishList</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
        <Title>Contact</Title>
            <ContactItem>
               <LocationOnIcon style={{marginRight:"10px"}}/> 202-8/45,Bombay Street,Mumbai,230532
            </ContactItem>
            <ContactItem>
               <LocalPhoneIcon style={{marginRight:"10px"}}/> +91 8485829995
            </ContactItem>
            <ContactItem>
                <MailIcon style={{marginRight:"10px"}}/>  contact@cartandbuy.dev
            </ContactItem>

            <PaymentIcon src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>

    </Container>
  )
}

export default Footer