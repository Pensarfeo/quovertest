import React from 'react'
import { FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap'

const validators = {
    email(email) {
        return /^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{1,20})+$/.test(email)
    },
    password(password) {
        return password.length > 6
    },
    firstName(name) {
        return name
    },
    lastName(name) {
        return name
    },
}

class Input extends React.PureComponent {
    constructor(props) {
        super()
        this.state = { validity: null, value: props.defaultValue || '' }
        props.reportValue(this.state.value, props.id)
    }

    // validatable = () => !!validators[ this.props.id ]
    isValid = () => {
        this.valid = validators[ this.props.id ](this.state.value)
        const validity = this.valid ? null : 'error'
        this.setState({ validity })
    }

    handleChange = (e) => {
        const value = e.target.value
        this.setState({ validity: null, value }, () => this.props.reportValue(value, this.props.id))
    }

    render() {
        return (
            <FormGroup
                controlId={ this.props.id }
                validationState = { this.state.validity }
            >
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                    type={ this.props.type }
                    value={ this.state.value }
                    placeholder= { this.props.placeholder }
                    onChange={ this.handleChange }
                />
                { this.props.validity == null ? '' : <HelpBlock> {this.props.errorMessage} </HelpBlock> }
            </FormGroup>
        )
    }
}

export default Input
