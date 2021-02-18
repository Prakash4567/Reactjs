import React, { Component } from 'react'
import LifecycleB from './LifecycleB'



 class LifecycleA extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'Vishnu'
         }
         console.log('LifecycleA constructor')
     }

     static getDerivedStateFromProps(props, state) {
         console.log('LifecycleA gerDerivedStateFromProps')
         return null
     }
     
     componentDidMount() {
         console.log('LifecycleA did Mount')
     }

     shouldComponentUpdate() {
         console.log('LifecycleA shouldComponenet update')
         return true
     }

     getSnapshotBeforeUpdate(prevProps, prevState) {
         console.log('LifecycleA getSnapshotBeforeUpdate')
         return null
     }

     componentDidUpdate() {
         console.log('LifecycleA componenetDidUpdate')
     }

     changeState =  () => {
         this.setState({
             name: 'vishnu'
         })
     }
     
    render() {
        console.log('LifecycleA render')
        return (
            <div>
              <div> LifecycleA </div> 
              <button onClick={this.changeState}>Change State</button> 
                <LifecycleB />
            </div>
           
        )
    }
}

export default LifecycleA
