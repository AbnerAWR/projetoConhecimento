import { Component } from 'react'
import './styles.css'

export interface Props {
    title: string,
    // hideToggle: boolean
}

// interface Computed {
//     icon
// }

class Header extends Component<Props>{

    name = {
        
    }
    computed = {
        icon() {
            return "fa-angle-left"
        }
    }

    public render() {
        return (
            <>
            <header className="header">
                <a className="toggle">
                    <i className="fa fa-lg" className="icon"></i>
                </a>
                <h1>
                   {this.props.title} 
                </h1>
            </header>
            </>
        )
    }
}

export default Header