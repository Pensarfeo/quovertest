import React from 'react'
import actions from '../resources/actions'
import { Alert, Grid, Row, Col } from 'react-bootstrap'

import Input from './components/input'
import BasicForm from './components/basicForm'
import SubmitButton from './components/submitButton'

class LogInForm extends BasicForm {
    vaidatableFields = []
    handleSuccess = (response) => {
        actions.user.add.dispatch(response.data)
    }

    action = actions.authentication.authenticate

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>
                <Input
                    reportValue = { this.getValue }
                    ref = { node => this.vaidatableFields[ 0 ] = (node) }
                    id = "email"
                    type = "text"
                    label = "Email address"
                    placeholder = "Enter email"
                    errorMessage = "Invalid Email format"
                />
                <Input
                    reportValue = { this.getValue }
                    ref = { node => this.vaidatableFields[ 1 ] = (node) }
                    id = "password"
                    type = "password"
                    label = "Your password"
                    placeholder = "Enter password"
                    errorMessage = "Password too short"
                />
                { this.state.error ?
                    <Alert bsStyle="danger">
                        Emails/Password combination invalid
                    </Alert> :
                    ''
                }
                <SubmitButton loading = { this.state.loading }>
                    Enter
                </SubmitButton>
            </form>
        )
    }
}

const LogInView = () => {
    const centerStyle = { minHeight: '100vh', display: 'flex', alignItems: 'center' }
    return (
        <Grid>
            <Row className="show-grid" style={ centerStyle }>
                <Col sm={ 4 } smOffset={ 4 } xs={ 12 } >
                    <LogInForm />
                </Col>
            </Row>
        </Grid>
    )
}

export default LogInView
