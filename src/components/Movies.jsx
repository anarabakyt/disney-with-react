import React from 'react'
import styled from 'styled-components'
const Movies = () => {
  return (
    <Container>
       <h4>Recommended for You</h4>
       <Content>
         <Wrap>
            <img src='https://pbs.twimg.com/media/FRWru9IUUAAzWVI.png:large'/>
         </Wrap>
         <Wrap>
            <img src='https://pbs.twimg.com/media/FRWru9IUUAAzWVI.png:large'/>
         </Wrap>
         <Wrap>
            <img src='https://pbs.twimg.com/media/FRWru9IUUAAzWVI.png:large'/>
         </Wrap>
         <Wrap>
            <img src='https://pbs.twimg.com/media/FRWru9IUUAAzWVI.png:large'/>
         </Wrap>
         <Wrap>
            <img src='https://pbs.twimg.com/media/FRWru9IUUAAzWVI.png:large'/>
         </Wrap>
         <Wrap>
            <img src='https://pbs.twimg.com/media/FRWru9IUUAAzWVI.png:large'/>
         </Wrap>
         <Wrap>
            <img src='https://pbs.twimg.com/media/FRWru9IUUAAzWVI.png:large'/>
         </Wrap>
         <Wrap>
            <img src='https://pbs.twimg.com/media/FRWru9IUUAAzWVI.png:large'/>
         </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container=styled.div`
`
const Content=styled.div`
display: grid;
grid-template-columns:repeat(4, minmax(0,1fr));
grid-gap: 25px;

`

const Wrap=styled.div`
    overflow: hidden;
    border: 3px solid rgba(249, 249, 249, 0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, 
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

 img {
    width:100%;
    height:100%
 }

 &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, 
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}
`