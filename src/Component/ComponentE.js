import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

/* This method using contextype ther are 2 limitations using this
1) it's only work with the classcomponents not with the function
2) we can only subscribe to single context using context type */

 class ComponentE extends Component {
    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF/>
            </div>         
        )
    }
}

 ComponentE.contextType = UserContext
//  This is another method of using context we can declare like this also


export default ComponentE
