import React , {Component} from "react"

class Main extends Component {

    constructor(props) {
        super();
        this.state = {favoritecolor: "red"};
      }
      
//--------------getDerivedState---------------------------
    //   static getDerivedStateFromProps(props, state) 
    //   {
    //       console.log("getderived")
    //       return {favoritecolor: props.favcol };
    //   }
      /*
      -this is called when after constructor
      -this is both update and mount life cycle
      -------------------------------------------------
      doubt- how to stop calling?
      */

     componentDidMount() {
         console.log("component did mount")
         var count =0;
        setInterval(() => {
            count++;
           this.setState({favoritecolor: "blue"})  
        }, 2000)
      }

     //-------------update lifecycle methods-----------
/*
     shouldComponentUpdate() {
        return false;
      }
    // - will stop any update methods from updating state
*/
//-----------------unmount lifecycle method----------------
componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

    render()
    {
        return(
            <div>
                  <h1>My Favorite Color is {this.state.favoritecolor}</h1>
            </div>
        )
    }
}

export default Main