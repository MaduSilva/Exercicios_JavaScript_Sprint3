

import React, { Component } from 'react'
import './index.css'

class Title extends Component{
    render() {
        return (
            <div className='background' >
                <h1>{this.props.text}</h1>
                <h2>{this.props.description || 'Descrição não informada'}</h2>
            </div>
        )
    }
}


//exporta o webcomponent pra deixar ele visível
export default Title;