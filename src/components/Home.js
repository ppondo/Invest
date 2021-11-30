import React from "react";
import styled from "styled-components";
import image from "../images/graphic.jpg"
import { Grid, Button, Container } from '@mui/material';

function Home() {
  return( 
  <Wrapper>
    <Container fixed>
    <Grid container justifyContent = "center" spacing={5}>
      <Grid item xs={4}>
        <div className="container">
        <h1 className = "title">How to Invest</h1>
        <p className = "about">Investing in the stock market is easier than beginners might think - all you need is an online brokerage account to get started.</p>
        <Button variant="contained" href = '#Learn'>Learn More</Button>
        </div>
      </Grid>
      <Grid item xs={8}>
        <div className = "image">
          <img src = {image} className = "graphic"></img>
        </div>
      </Grid>
    </Grid>
    </Container>

    {/* <div className = "container">
      <div className = "intro">
        <h1 className = "title">How to Invest</h1>
        <p className = "about">Investing in the stock market is easier than beginners might thing _ all you need is an online brokerage account to get started.</p>
        <a href = "#Learn"><button type = "button" className = "button">Learn More</button></a>
      </div>
      <div className = "image">
        <img src = {image} className = "graphic"></img>
      </div>
    </div> */}
  </Wrapper>
      )
}
const Wrapper = styled.article`
.graphic{
  width: 100%;
  height: 500px;
}
.container {
  margin-left: 2%;
}
.image{
display: inline;
}
.title{
  margin-top: 40%;
  text-align: left;
  font-size: 32px;

}
.about{
  font-size: 20px;
  text-align: left;
  font-weight: normal;
  padding-bottom: 1%;
}
.button {

	background-color:#0d3f5e;
	border-radius:28px;
	border:1px solid #0d3f5e;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Effra;
  font-size:20px;
  font-weight: bold;
	padding:16px 31px;
	text-decoration:none;
  text-shadow:0px 1px 0px #2f6627;
}
.button:hover {
	background-color:#0A2C41;
}
.button:active {
	position:relative;
	top:1px;
}


`;
export default Home;
