import React from 'react'
import { Alert, Button, Grid, Row, Col } from 'react-bootstrap'

class BasicForm extends React.Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            error: false,
        }
        this.values = {}
    }
    componentDidUpdate(prevProvs, prevState) {
        const action = this.action || this.props.action
        if (!prevState.loading && this.state.loading) {
            action(this.values, {}, this.defaultHandleSuccess, this.defaultHandleError)
        }
    }

    componentWillUnmount() {
        this.unmounted = true
    }

    getValue = (value, type) => {
        this.values[ type ] = value
    }

    validateFields = () => {
        this.vaidatableFields.forEach(field => field.isValid())
        return this.vaidatableFields.reduce((prev, field) => prev && field.valid, true)
    }

    defaultHandleError = error => this.handleError(error)
    defaultHandleSuccess = response => this.handleSuccess(response)
    defaultBeforeSubmit = () => this.beforeSubmit()
    defaultAfterSubmit = () => this.afterSubmit && this.afterSubmit()

    handleSuccess = () => { this.setState({ loading: false, error: false }) }
    handleError = (error) => {
        console.log(error)
        this.setState({ loading: false, error: true })
    }
    beforeSubmit = () => {}
    afterSubmit = () => {}

    handleSubmit = (event) => {
        if (event && event.preventDefault) event.preventDefault()
        const valid = this.validateFields()
        this.defaultBeforeSubmit()
        if (valid) this.setState({ loading: true, error: false }, this.defaultAfterSubmit)
    }
}

export default BasicForm
