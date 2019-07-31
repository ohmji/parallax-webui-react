import React  from 'react' ;

 class RightPlc extends React.Component {
        constructor (props) {
            super(props)
            this.state = {
                    speed:this.props.speed ||1 ,
                    width:'100%',
                    height:this.props.height || '100',

                    left : this.props.left,
                    right:this.props.right,


                    position:'absolute',
                    zIndex:this.props.zindex || '0',

                    backgroundRepeat:'no-repeat',
                    backgroundPosition:'center',
                    backgroundColor:this.props.color || null ,
                    backgroundImage:`url(${this.props.image})`
                
                        
            }

            this.handleScroll = this.thorottle(this.handleScroll.bind(this),10);
        }

       

        componentDidMount(){
                window.addEventListener('scroll',this.handleScroll);

        }
        componentWillUnmount(){

                 window.removeEventListener ('scroll',this.handleScroll);
        }

        thorottle(fn,wait){
                let time = Date.now()
                return function() {
                    if((time+wait-Date.now())<0){
                        fn()
                        time = Date.now()
                    }
                }
        }
        handleScroll(){
                   
                    const speed = this.props.speed ;

                    const pageLeft = window.scrollY ;
                    const newLeft = -(pageLeft*speed)
                   
                    console.log('page top',pageLeft)
                    console.log('new top',newLeft) 
                   if (newLeft>-550) {
                    this.refs.parallaxElement.style.left = `${newLeft}px`;
                   }
                }

            render(){

                                return(
                                 <div
                                        ref = "parallaxElement"
                                        style={{...this.state}}
                                 >
                                                {this.props.children}
                                 </div>
                                )

            }

    }
export default RightPlc;