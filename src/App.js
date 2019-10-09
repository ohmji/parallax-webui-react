import React from 'react';
import './App.css';
import './views/layout.sass'
import  Plc from './Containers/Plc'
import FullPageIntroWithFixedTransparentNavbar from './components/FullPageIntroWithFixedTransparentNavbar '
import { MDBContainer,MDBRow ,MDBCol} from "mdbreact";
import Card from "./components/Card"
import LeftPlc from "./Containers/LeftPlc"
import CardParrot from './components/Cardparrot';
import RightPlc from "./Containers/RightPlc"
import Reveal from 'react-reveal/Reveal'
import SescondLayer from './views/SescondLayer'

class App extends React.Component {
 

  render() {

    return (
    <div className="App">

      <header className="bird-box">
        <FullPageIntroWithFixedTransparentNavbar></FullPageIntroWithFixedTransparentNavbar>
    
        <Plc
        speed = {2}
        zindex = "1"
        right="-300px"
        >
          <div className="fore-bird"></div>

        </Plc>
        <Plc
        speed = {1}
        zindex = "1"
        height="650px"
        >
          <div className="logo"></div>
         
        </Plc>
           
       

    </header>
      <div style={{fontFamily: 'PT Serif',height:"1700px"}} className="elegant-color-dark" > 
          <MDBContainer>
            
          <MDBRow>
            
            <MDBCol  sm="4"><h1 ><p  className="white-text">
               <Plc 
               speed = {0.3}
               zindex = "1"
              >
              <div style={{lineHeight: '1.6' ,marginTop : '75px' }}>
             
              PARALLAX FLAMINGO HELLO WORLD</div>
              </Plc>
              
              </p></h1></MDBCol> 
         </MDBRow>


        <div style={{marginTop : '50px' }}>
          <MDBRow>
             
                    <MDBCol sm="6">
                        <LeftPlc
                          speed = {0.7}
                          zindex = "1"
                          height="650px"
                          >
                            <div className="red-bird"></div>
                        </LeftPlc>
                  
                    </MDBCol>
                   
                   
                     <MDBCol sm="6"><Reveal effect="fadeInUp">
                        <Card></Card> </Reveal>
                     </MDBCol>

                
             </MDBRow>
             </div>

             <div style={{marginTop : '50px' }}>
             <MDBRow>
              
               <MDBCol sm="4">


               </MDBCol>
             <MDBCol  sm="3"><h1 ><p  className="white-text">
               <Plc 
               speed = {0.1}
               zindex = "1"
              >
              <div style={{lineHeight: '1.6' ,marginTop :'200px' }}>
             
              PARROT PARALLAX </div>
              </Plc>
              
              </p></h1></MDBCol> 

             </MDBRow>
             <MDBRow>
             
             <MDBCol sm="6">
             <Reveal effect="fadeInUp">
                 <CardParrot></CardParrot>  </Reveal>
              </MDBCol>
             <MDBCol sm="6">
                
                <RightPlc  
                speed={0.33}
                zindex = "1"
                >
                <dic className="blue-bird"></dic></RightPlc>
             </MDBCol>
           
                 </MDBRow>
                 <MDBRow>
             
             <MDBCol sm="6">
               
              </MDBCol>
            
                 </MDBRow>
              </div>
          </MDBContainer>  
          <div className="new-box" style={{marginTop : '125px' }} >
            
          <MDBContainer >
            <MDBRow>
              <MDBCol sm="6"><SescondLayer
                titleText="FLAMINGO"
                marginTop="160px"
              ></SescondLayer></MDBCol> 
              </MDBRow>
              <MDBRow>
            
              <MDBCol md="6" className="ml-md-auto">
                  <SescondLayer
                      titleText="PARROT"
                      marginTop="90px"
                      width="25rem" 
                  >

                  </SescondLayer>
                </MDBCol>
            
            </MDBRow>
            <MDBRow>
            <MDBCol md="6" >
                <SescondLayer
                    titleText="ANIMAL"
                    marginTop="160px"
                    width="50rem" 
                >

                </SescondLayer>
              </MDBCol>
          
          </MDBRow>
          </MDBContainer>
          </div>
        </div>
     
    </div>
  );
}
}
export default App;
