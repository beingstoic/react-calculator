import React, { Component } from 'react';

const operands=[
    {id:'seven', value:'7'},
    {id:'eight', value:'8'},
    {id:'nine', value:'9'},
    {id:'four', value:'4'},
    {id:'five', value:'5'},
    {id:'six', value:'6'},
    {id:'one', value:'1'},
    {id:'two', value:'2'},
    {id:'three', value:'3'},
    {id:'zero', value:'0'},
    {id:'ADD', value:'+'},
    {id:'SUBTRACT', value:'-'},
    {id:'MULTIPLY', value: '*'},
    {id:'DIVIDE', value:'/'}
]
const val=[
    {id:'ADD', value:'+'},
    {id:'SUBTRACT', value:'-'},
    {id:'MULTIPLY', value: '*'},
    {id:'DIVIDE', value:'/'}
]

class RenderOperands extends Component {

    handleClick=()=>{
        this.props.handleDisplay(this.props.value);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown)
        window.focus()
    }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown)
     }

    handleKeydown= e => {this.props.handleDisplay(this.props.id)}
    render() {
        return (
            <div>
                <button className="btn btn-danger">{this.props.value}</button>
            </div>
        );
    }
}


class Calculate extends Component {
    constructor(props){
        super(props)
    
        this.state ={
          display:'Click bellow or press key',
        }
    }
    handleDisplay = display => this.setState({ display })
    render() {
        return (
            <div>
                <div>
                    {this.state.display}
                </div>
                <div>
                    {
                        operands.map(operand=>(
                            <RenderOperands id={operand.id } value={operand.value} 
                            key={operand.id}
                            handleDisplay={this.handleDisplay}
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Calculate;
