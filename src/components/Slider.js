import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { SliderItems } from '../data';
import { mobile } from '../responsive';
import  { tablet,others } from '../responsive';


const Container=styled.div`
width:100%;
height:100vh;
background-color:white;
display:flex;
position:relative;
overflow:hidden;
${mobile({display:"none"})}
${tablet({height:"80vh"})}



`

const Arrow=styled.div`
width:50px;
height:50px;
background-color:gray;
display:flex;
align-items:center; 
justify-content:center;
border-radius:50%;
position:absolute;
top:0;
bottom:0;
margin:auto; 
left:${props=>props.direction==="left" && "10px"};
right:${props=>props.direction==="right" && "10px"};
cursor:pointer;
opacity:0.7;
Z-index:1;
`

const Wrapper=styled.div`
height:100%;
display:flex;
transition:all 1.5s ease;
transform:translateX(${props=>props.sliderIndex*-100}vw);

`
const Slide=styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;
background-color:${props=>props.bg};
`
const Image=styled.img`
height:90%;
padding:40px;

`

const ImageContainer=styled.div`
flex:1;
height:100%;
${tablet({display:"none"})}
${others({display:"none"})}
`

const InfoContainer=styled.div`
flex:1;
padding:25px;
width:100%;
${tablet({display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"})}
`

const Title=styled.h1`
font-size:70px;`

const Desc=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`
const Button=styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;

`

const Slider = () => {
   const [sliderIndex,setSliderIndex]=useState(0);

    const handleClick=(direction)=>{
        if(direction==="left"){
            setSliderIndex(sliderIndex>0?sliderIndex-1:2)
        }
        if(direction==="right"){
            setSliderIndex(sliderIndex<2?sliderIndex+1:0)
        }

    }
  return (
    <Container>
    <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowBackIosOutlinedIcon/>
    </Arrow>

   
    <Wrapper sliderIndex={sliderIndex}>
{SliderItems.map(item=>(
    <Slide bg={item.bg} key={item.id}>
        <ImageContainer>
            <Image src={item.img}/>
        </ImageContainer>
        <InfoContainer>
        <Title>{item.title}</Title>
        <Desc>DON'T COMPRIMISE ON STYLE!GET 30% FLAT OFF ON NEW ARRIVALS.</Desc>
        <Button>SHOP NOW</Button>
        </InfoContainer>
        </Slide>

))}
    </Wrapper>
   

    <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowForwardIosOutlinedIcon/>
    </Arrow>
    </Container>
  )
}

export default Slider;