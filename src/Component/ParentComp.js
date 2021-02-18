import React, { Component } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'

 class ParentComp extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'Vishnu'
         }
     }

     componentDidMount() {
         setInterval(() => {
             this.setState({
                 name: 'Vishnu'
             })
         }, 2000)
     }
     
    render() {
        console.log('********************Parent Comp render***********************')
        return (
            <div>
                Parent Component
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
                <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
