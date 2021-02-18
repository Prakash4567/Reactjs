import React, { Component } from 'react'



 class LifecycleB extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name : 'Vishnu'
         }
         console.log('LifecycleB constructor')
     }

     static getDerivedStateFromProps(props, state) {
         console.log('LifecycleB gerDerivedStateFromProps')
         return null
     }
     
     componentDidMount() {
         console.log('LifecycleB did Mount')
     }

     shouldComponentUpdate() {
        console.log('LifecycleB shouldComponenetUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componenetDidUpdate')
    }
    
     
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
