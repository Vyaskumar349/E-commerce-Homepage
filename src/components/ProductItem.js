import { ListItem } from '@mui/material';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import styled from 'styled-components';



const Info=styled.div`
opacity:0;
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.2);
z-index:3;
display:flex;
justify-content:center;
align-items:center;
 
`

const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#f5fbfd;
position:relative;

&:hover ${Info}{
opacity:1;
transition:all 0.5s ease;
}
`
const Image=styled.img`
height:75%;
z-index:2;
`
const Circle=styled.div`
height:200px;
width:200px;
background-color:white;
position:absolute;
border-radius:50%;`



const Icon=styled.div`
height:40px;
width:40px;
border-radius:50%;
background-color:white;
display:flex;
align-items:center;
justify-content:center; 
margin:10px;
transition:all 0.25s linear;

&:hover{
  background-color:#e9f5f5;
  transform:scale(1.1);
  cursor:pointer;
}`


const ProductItem = ({item}) => {
  return (
    <Container>
      <Circle/> 
      <Image src={item.img}/>   
      <Info>
      <Icon>
        <ShoppingCartOutlinedIcon/>
      </Icon>
      <Icon>
        <SearchOutlinedIcon/>
        </Icon>
        <Icon>
        <FavoriteBorderOutlinedIcon/>
        </Icon>
        <Icon>
       
        </Icon>
        </Info>
    </Container>
  )
}

export default ProductItem