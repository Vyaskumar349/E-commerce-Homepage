import styled from 'styled-components'
import React from 'react'
import { mobile } from '../responsive'
const Container=styled.div`
height:70vh;
width:100vw;
margin:3px;
position:relative;

${mobile({height:"30vh"})}
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
${mobile({height:"30vh"})}
 `
 const Info=styled.div`
 position:absolute;
 top:0px;
 left:0px;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
width:100%;
height:100%;

 `
const Title=styled.h1`
color:white;
margin-bottom:20px`
const Button=styled.button`
cursor:pointer;
border:none;
padding:10px;
background-color:white;
color:gray;
font-weight:600;`

const CategoryItem = ({item}) => {
  return (
    <Container>
      <Image src={item.img}/>
      <Info>
      <Title>
        {item.title}
      </Title>
      <Button>SHOP NOW</Button>
      </Info>
      
    </Container>
  )
}

export default CategoryItem