import {  Search } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { style } from '@mui/system';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import styled from 'styled-components';
const Container=styled.div`
height:60px;

`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between; 
align-items:center;
`

const Language=styled.span`
font-size:14px;
cursor:pointer;`

const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`

const Center=styled.div`
flex:1;
text-align:center;`

const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`

const SearchContainer=styled.div`
border:1px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;`

const Input =styled.input`
border:none;
padding:5px;
`
const Logo=styled.h1`
font-weight:bold;`

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper> 
        <Left> 
            <Language>
                EN
                </Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"gray",fontSize:"16px"}}/>
                </SearchContainer>
            
            </Left>
        <Center><Logo>CART&BUY.</Logo></Center>
        <Right>
            <MenuItem>REGISTER</MenuItem>
            <MenuItem>SIGN UP</MenuItem>
            <MenuItem>
            <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon/>
            </Badge>
            </MenuItem>
        </Right>
        </Wrapper> 
        </Container>
        
  )
}

export default Navbar;