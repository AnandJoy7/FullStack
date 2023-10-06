import React, {Component} from "react" 

class Welcome   extends Component {
 render() {
    return <h1> Class {this.props.name} as a {this.props.roleName}</h1>
 }
}
 
export default Welcome    