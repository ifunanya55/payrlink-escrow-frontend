import React,{ useState } from 'react';
import logo from '../../logo.png';
import settingicon from '../../images/settingicon.png';

import {Container, Navbar, Nav, Button} from 'react-bootstrap';
import ConnectModal from '../modal/connectwallet'
import { LinkContainer } from 'react-router-bootstrap';
function NavBar(props){
  const[status,setStatus]=useState(false);
  // const[bodyClass, setBodyClass] = useState(false);
  // const toggleClass = () =>{
  //     if(!bodyClass){
  //       document.body.classList.add('whitebg');
  //     } else {
  //       document.body.classList.remove('whitebg');
  //     }
  //     setBodyClass(!bodyClass);
  // }
  
  // const hideToggle=()=>{
  //   const element = document.getElementsByClassName('navbar-collapse')
  //   element.classList.remove("show")
  // }
  
    return(
        <Container fluid className="header">
          <Container>
            <Navbar>
              <Navbar.Brand href="/"><img alt="" src={logo}/></Navbar.Brand>
              <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="mr-auto">
                  <LinkContainer to="/">
                    <Nav.Link eventKey={1}>HOME</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="#">
                    <Nav.Link eventKey={1}>ARBITRATION</Nav.Link>
                  </LinkContainer>                    
                </Nav>
                
              </Navbar.Collapse>
              
              <Navbar.Text>
                <a className={props.bodyClass? 'header-setting-icon whiteBg': 'header-setting-icon'} onClick={props.toggleClass}><img alt="" src={settingicon}/></a>
           
                <Button className="connect-wallet" onClick={()=>{
                  setStatus(true)
                }}>Connect Wallet</Button>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </Navbar.Text>
             
            </Navbar> 
            {status===true?
            <ConnectModal status={status} setStatus={setStatus}/>
            :
            ""
            }
        </Container>
      </Container>  
    )

}
export default NavBar ;