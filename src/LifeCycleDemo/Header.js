import React , {Component} from "react"
import Main from "./Main"
class Header extends Component {
    constructor()
    {
        super();
        this.state ={
            show : true
        }

       
    }


    delHeader = () => {
        this.setState({show: false});
      }
      render() {
        let myheader;
        if (this.state.show) {
          myheader = <Main />;
        };
        return (
          <div>
          {myheader}
          <button type="button" onClick={this.delHeader}>Delete Header</button>
          </div>
        );
      }
}

export default Header