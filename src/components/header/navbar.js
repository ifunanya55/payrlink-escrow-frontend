import React,{ useState } from 'react';
import { Route, RouteHandler } from 'react-router';
import logo from '../../logo.png';
import settingicon from '../../images/settingicon.png';
import downblue from '../../images/downblue.png';
import walleticon from '../../images/walleticon.png';
import notificationicon from '../../images/notificationicon.png';
import {Container, Navbar, Nav, NavItem, Form, FormControl, Button, NavLink} from 'react-bootstrap';
import ConnectModal from '../modal/connectwallet';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom'
function NavBar(props){
  const[status,setStatus]=useState(false)
    return(
        <Container fluid className="header">
          <Container>
            <Navbar>
              <Navbar.Brand href="#home"><img src={logo}/></Navbar.Brand>
              
              <Navbar.Collapse id="basic-navbar-nav">
              {props.changenavbar===false ?
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#">ARBITRATION</Nav.Link>
                </Nav>
                :
                <Nav className="mr-auto">
                  <LinkContainer to="/dashboard">
                    <Nav.Link eventKey={1}>DASHBOARD</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/assets">
                    <Nav.Link eventKey={1}>ASSETS</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/staking">
                    <Nav.Link eventKey={1}>STAKING</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/transaction">
                    <Nav.Link eventKey={1}>TRANSACTION</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/dashboard">
                    <Nav.Link eventKey={1}>ARBITRATION</Nav.Link>
                  </LinkContainer>
                    {/* <Nav.Link as={Link} href="/dashboard">DASHBOARD</Nav.Link> */}
                    {/* <Nav.Link as={Link} to="/dashboard">DASHBOARD</Nav.Link>
                    <Nav.Link href="/assets">ASSETS</Nav.Link>
                    <Nav.Link href="/staking">STAKING</Nav.Link>
                    <Nav.Link href="/transaction">TRANSACTION</Nav.Link>
                    <Nav.Link href="/dashboard">ARBITRATION</Nav.Link> */}
                </Nav>
              }
              </Navbar.Collapse>
              {props.changenavbar===false ?
              <Navbar.Text>
                <a href="#" className="header-setting-icon" ><img src={settingicon}/></a>
                <Button className="connect-wallet" onClick={()=>{
                  setStatus(true)
                }}>Connect Wallet</Button>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Navbar.Text>
              :
              <Navbar.Text>
                <a href="#" className="header-setting-icon" ><img src={settingicon}/></a>
                <a href="#" className="header-notification-icon" ><img src={notificationicon}/></a>
                <Button className="connect-wallet" onClick={()=>{
                  setStatus(true)
                }}><img src={walleticon}/> 0X13484****79 <img src={downblue}/></Button>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Navbar.Text>
              }
             
            </Navbar> 
            {status===true?
            <ConnectModal status={status} setStatus={setStatus} LogInStatus={props.LoginFun}/>
            :
            ""
            }
        </Container>
      </Container>  
    )

}
export default NavBar ;