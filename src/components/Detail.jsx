import React from 'react'
import styled from 'styled-components'

const Detail = () => {
  return (
    <Container>
       <Background>
        <img src="https://pbs.twimg.com/media/FMcJackXIAwNDFO.jpg"/>
       </Background>
       <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?widht=1440&aspectRatio=1.78"/>
       </ImageTitle>
       <Controls>
        <PlayButton>
            <img src="/images/play-icon-black.png"/>
            <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
            <img src="/images/play-icon-black.png"/>
            <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
            <span>+</span>
         </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png"/>
        </GroupWatchButton>
       </Controls>
       <SubTitle>                  
        </SubTitle>
       <Description>
                       
        </Description>
    </Container>
  )
}

export default Detail

const Container=styled.div`
  min-height:calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background=styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  right: 0;
  left: 0;
  z-index: -1;
  opacity: 0.9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ImageTitle=styled.div`
 height: 30vh;
 min-height: 170px;
 width: 35vw;
 min-width: 200px;

 img {
    width: 100%;
    height: 100%;
    object-fit:contain;
 }
`
const Controls=styled.div`
display: flex;
align-items: center;
`
const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249, 249, 249);
    padding: 0 24px;
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    margin-right: 20px;
    &:hover {
        background: rgb(198, 198, 198)
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249); 
`
const AddButton = styled.button`
    width: 44px; 
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 16px;
    background-color: rgba(0, 0, 0, 0.6);
    border: white 2px solid;
    span {
        font-size: 30px;
        color: white;
    } 
`
const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`
const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`
const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
`
