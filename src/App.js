import './App.css';
import Potencia from './Potencia'; 
import TenCorMotor from './TenCorMotor';
import TenCorPlacas from './TenCorPlacas';
import Temperatura from './Temperatura';

import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { Component } from 'react';

function Greeting(props) {
    const buttonState = props.buttonState;
    if (buttonState === 1) {
      return (
        <div className="container_t">
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                    <h1>Leituras do Motor</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                    <TenCorMotor />
                </div>
            </div>
        </div>
      );
    }
    else if (buttonState === 2) {
        return (
        <div className="container_t">
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                <h1>Leituras das Placas Solares</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                    <TenCorPlacas />
                </div>
            </div>
        </div>
        );
    }
    else if (buttonState === 3) {
        return (
        <div className="container_t">
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                    <h1>Leituras das Potencias Geradas e Consumidas</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                    <Potencia />
                </div>
            </div>
        </div>
        );
    }
    else if (buttonState === 4) {
        return (
        <div className="container_t">
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                    <h1>Leituras de Temperatura</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                    <Temperatura />
                </div>
            </div>
          </div>
        );
    }
    
    return (
        <>
        <div className="container_t">
            <div className="d-flex justify-content-center">
                <div className="col-auto">
                     <h1>Todas as leituras</h1>
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-5">
                    <h3>Leituras do Motor</h3>
                </div>
                <div className="col-auto">
                    <h3>Leituras das Placas Solares</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                    <TenCorMotor />
                </div>
                <div className="col-auto">
                    <TenCorPlacas />
                </div>
            </div>
            <div className="d-flex justify-content-center">
                <div className="col-8">
                    <h3>Leituras das Potencias Geradas e Consumidas</h3>
                </div>
                <div className="col-auto">
                    <h3>Leituras de Temperatura</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-auto">
                   <Potencia />
                </div>
                <div className="col-auto">
                  <Temperatura />
                </div>
            </div>
        </div>
        </>
      );
  }

class LoginControl extends React.Component {
    constructor(props) {
      super(props);

      this.handleAllClick = this.handleAllClick.bind(this);
      this.handleMotorClick = this.handleMotorClick.bind(this);
      this.handlePlacasClick = this.handlePlacasClick.bind(this);
      this.handlePotenciaClick = this.handlePotenciaClick.bind(this);
      this.handleTemperaturaClick = this.handleTemperaturaClick.bind(this);      

      this.state = {buttonState: false};
    }
  

    handleAllClick() {
        this.setState({buttonState: 0});
    }

    handleMotorClick() {
      this.setState({buttonState: 1});
    }
  
    handlePlacasClick() {
        this.setState({buttonState: 2});
    }

    handlePotenciaClick() {
        this.setState({buttonState: 3});
    }

    handleTemperaturaClick() {
        this.setState({buttonState: 4});
    }
  
    render(){

      const buttonState = this.state.buttonState;

      return (
        <>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-1">
                    <button className='teste' onClick={this.handleAllClick}>Todos</button>
                </div>
                <div className="col-1">
                    <button className='teste' onClick={this.handleMotorClick}>Motor</button>
                </div>
                <div className="col-1">
                    <button className='teste' onClick={this.handlePlacasClick}>Placas</button>
                </div>
                <div className="col-1">
                    <button className='teste' onClick={this.handlePotenciaClick}>Potencia</button>
                </div>
                <div className="col-1">
                    <button className='teste' onClick={this.handleTemperaturaClick}>Temperatura</button>
                </div>
            </div>
        </div>

        <div className="col">  
          <Greeting buttonState={buttonState} />
        </div>
        </>
      );

      }
  }

function App(){
    return (
        <LoginControl />
  );
};

export default App;