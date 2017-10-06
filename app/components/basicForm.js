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
        this.eventHandlers = {
            success: this.defaultHandleSuccess,
            error: this.defaultHandleError,
        }
    }
    componentDidUpdate(prevProvs, prevState) {
        const action = this.action || this.props.action
        if (!prevState.loading && this.state.loading) {
            action(this.values, {}, this.eventHandlers)
        }
    }

    componentWillUnmount() {
        delete this.eventHandlers.success
        delete this.eventHandlers.error
    }

    getValue = (value, type) => {
        this.values[ type ] = value
    }

    vaidatableFields = []

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
