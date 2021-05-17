import React, { useState } from 'react'
// import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import styled from 'styled-components'
import './teclas.css'
import { sonidos } from '../utils/sonidos';


const StyledContainer = styled(Container)`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 400px; */
    font-family: 'Noto Sans TC', sans-serif;
    border-radius: 10px;
`


const StyledButtomContainer = styled.button`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    background-color: aqua;
    width: 70px;
    height: 56px;
    margin: 5px;
    box-shadow: 0px 10px 10px black;
    &:active{
        background-color: red;
    }
`
function reproducir(section) {
    let audio = section;
    audio.play();
}


document.addEventListener("keydown", function (event) {

    switch (event.key) {
        case 'q':
            document.querySelector('#Heater-1').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        case 'w':
            document.querySelector('#Heater-2').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        case 'e':
            document.querySelector('#Heater-3').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        case 'a':
            document.querySelector('#Heater-4').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        case 's':
            document.querySelector('#Clap').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        case 'd':
            document.querySelector('#Open-HH').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        case 'z':
            document.querySelector('#Kick-n-Hat').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        case 'x':
            document.querySelector('#Kick').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        case 'c':
            document.querySelector('#Closed-HH').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            break;
        default:
            console.log("")
            break;
    }

}, false);

document.addEventListener("keyup", function (event) {

    switch (event.key) {
        case 'q':
            document.querySelector('#Heater-1').style.backgroundColor = '#344fa1';
            break;
        case 'w':
            document.querySelector('#Heater-2').style.backgroundColor = '#344fa1';
            break;
        case 'e':
            document.querySelector('#Heater-3').style.backgroundColor = '#344fa1';
            break;
        case 'a':
            document.querySelector('#Heater-4').style.backgroundColor = '#344fa1';
            break;
        case 's':
            document.querySelector('#Clap').style.backgroundColor = '#344fa1';
            break;
        case 'd':
            document.querySelector('#Open-HH').style.backgroundColor = '#344fa1';
            break;
        case 'z':
            document.querySelector('#Kick-n-Hat').style.backgroundColor = '#344fa1';
            break;
        case 'x':
            document.querySelector('#Kick').style.backgroundColor = '#344fa1';
            break;
        case 'c':
            document.querySelector('#Closed-HH').style.backgroundColor = '#344fa1';
            break;
        default:
            console.log("")
            break;
    }
}, false)

// Controlar con evento de click
function dispararSonido(e) {
    // e.target.firstElementChild.play();
    // console.log(e.target.id);
    // document.querySelector('e.target.id').style.backgroundColor = 'red'
    reproducir(document.getElementById(e.target.firstElementChild.id));

}

export default function Teclas() {

    const [state, setstate] = useState(false)

    console.log(sonidos);
    return (
        <React.Fragment>
            <Container fluid >
                <StyledContainer id='drum-machine'>
                    <Row id='display' style = {{background: '#77acf1', padding: '20px', borderRadius: '15px'}}>
                        {sonidos.map(box =>
                            <Col xs={4} style = {{display: 'flex', justifyContent: 'center'}}>
                                <StyledButtomContainer className='drum-pad ' onClick={dispararSonido} id={box.id} style = {{color: 'white', fontWeight: 'bold', background: '#344fa1'}}>
                                    {box.keyTrigger}
                                    <audio src={box.url} id={box.keyTrigger} className='clip' ></audio>
                                </StyledButtomContainer>
                            </Col>
                        )}
                    </Row>
                </StyledContainer>
            </Container>
        </React.Fragment>
    )
}
