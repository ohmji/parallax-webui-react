import React from 'react'
import { MDBCard, MDBCardBody,  MDBCardTitle, MDBCardText } from 'mdbreact';


class SesscondLayer extends React.Component {
    constructor(props) {
        super(props);
          this.state = {
            titleText:""||this.props.titleText ,
            bodyText:""||this.props.bodyText ,
            width:"30rem"||this.props.width,
            marginTop:"75px"|| this.props.marginTop,
            
          isFlipped: false
        };
      }


    render() {
            return(
                        <div  style={{marginTop : this.props.marginTop,  }}   >
                            
                                <div   style={{ width: this.props.width }}  >
                                <MDBCard   style={{borderWidth: "5px", borderColor:"white"}}  border     >
                            
                                    <MDBCardBody className="elegant-color-dark">
                                    <MDBCardTitle className="white-text">{this.props.titleText}</MDBCardTitle>
                                    <MDBCardText className="white-text">
                                        {this.props.bodyText}
                                    </MDBCardText>
                                    </MDBCardBody>
                                 </MDBCard>
                                </div>
 
                             

                        </div>

            )

    }

} 
export default SesscondLayer 