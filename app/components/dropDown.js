import React from 'react'
import { FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap'

const validators = {
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
            <FormGroup controlId="formControlsSelect">
                <ControlLabel>{this.props.label}</ControlLabel>
                <FormControl
                    componentClass = "select"
                    placeholder = "select"
                    onChange = { this.handleChange }
                >
                    {this.props.options.map(value =>
                        <option key = { value } value = { value }>{value}</option>,
                    )}
                </FormControl>
            </FormGroup>
        )
    }
}

export default Input
