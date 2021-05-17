import React, { useState } from 'react'
// import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faTwitter, faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
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
    flex-direction: column;
`


const StyledButtomContainer = styled.button`
    display: flex; 
    justify-content: center; 
    align-items: center; 
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

const StyledDisplayContainer = styled(Container)`
    background-color: #344fa1;
    margin-top: 20px;
    text-align: center; 
    width: 50%;
    padding: 20px;
    border-radius: 10px; 
    color: white; 

`

const StyledHeader = styled(Container)`
    background: #0E1C36;
    color: white; 
    padding: 20px; 
    position: fixed; 
    top: 0;
    width: 100%;
    font-weight: bold; 
    left: 0; 
`;

const StyledFooterContainer = styled(Container)`
    background: #0E1C36;
    padding: 20px; 
    color: white; 
    position: fixed; 
    bottom: 0; 
    width: 100%;
    text-align: center; 
    font-weight: bold; 
    left: 0; 
`


document.addEventListener("keydown", function (event) {
    let sonidoMensaje;
    switch (event.key) {
        case 'q':
            document.querySelector('#Heater-1').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Heater-1';
            break;
        case 'w':
            document.querySelector('#Heater-2').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Heater-2';
            break;
        case 'e':
            document.querySelector('#Heater-3').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Heater-3';
            break;
        case 'a':
            document.querySelector('#Heater-4').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Heater-4';
            break;
        case 's':
            document.querySelector('#Clap').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Clap';
            break;
        case 'd':
            document.querySelector('#Open-HH').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Open-HH';
            break;
        case 'z':
            document.querySelector('#Kick-n-Hat').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Kick-n-Hat';
            break;
        case 'x':
            document.querySelector('#Kick').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Kick';
            break;
        case 'c':
            document.querySelector('#Closed-HH').style.backgroundColor = 'red';
            reproducir(document.getElementById(event.key.toUpperCase()));
            sonidoMensaje = document.getElementById('display');
            sonidoMensaje.textContent = 'Closed-HH';
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
    reproducir(document.getElementById(e.target.firstElementChild.id));
    let sonidoMensaje = document.getElementById('display');
    sonidoMensaje.textContent = e.target.id;
}

export default function Teclas() {

    const [state, setstate] = useState(false)

    console.log(sonidos);
    return (
        <React.Fragment>
            <Container fluid >
                <StyledHeader fluid>Drum Machine</StyledHeader>
                <StyledContainer >
                    <Row style={{ background: '#77acf1', padding: '20px', borderRadius: '15px' }} id='drum-machine'>
                        {sonidos.map(box =>
                            <Col xs={4} style={{ display: 'flex', justifyContent: 'center' }}>
                                <StyledButtomContainer className='drum-pad ' onClick={dispararSonido} id={box.id} style={{ color: 'white', fontWeight: 'bold', background: '#344fa1' }}>
                                    {box.keyTrigger}
                                    <audio src={box.url} id={box.keyTrigger} className='clip' ></audio>
                                </StyledButtomContainer>
                            </Col>
                        )}
                    </Row>
                    <StyledDisplayContainer id='display'></StyledDisplayContainer>
                </StyledContainer>
                <StyledFooterContainer fluid className = 'footer-container'>Desarrollado por Ysnaldo Jose Lopez Hernandez  |
                    <a href="https://www.facebook.com/" target = '_blank'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://github.com/YsnaldoXVen" target = '_blank'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://twitter.com/lopezh_yjose" target = '_blank'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </StyledFooterContainer>
            </Container>
        </React.Fragment>
    )
}
