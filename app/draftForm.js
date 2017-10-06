import React from 'react'
import actions from '../resources/actions'
import { Row, Col } from 'react-bootstrap'

import Input from './components/input'
import BasicForm from './components/basicForm'
import SubmitButton from './components/submitButton'
import DropDown from './components/dropDown'

class Form extends BasicForm {
    action = actions.draft.create

    render() {
        return (
            <form onSubmit = { this.handleSubmit }>
                <Input
                    reportValue = { this.getValue }
                    ref = { node => this.vaidatableFields[ 0 ] = (node) }
                    defaultValue = { this.props.firstName || 'asdf' }
                    id = "firstName"
                    type = "text"
                    label = "Driver's Name"
                    placeholder = "Enter driver's name"
                    errorMessage = "Can't be missing"
                />
                <Input
                    reportValue = { this.getValue }
                    ref = { node => this.vaidatableFields[ 1 ] = (node) }
                    defaultValue = { this.props.lastName || 'asdf' }
                    id = "lastName"
                    type = "text"
                    label = "Driver's Surname"
                    placeholder = "Enter driver's surname"
                    errorMessage = "Can't be missing"
                />
                <Input
                    reportValue = { this.getValue }
                    ref = { node => this.vaidatableFields[ 2 ] = (node) }
                    defaultValue = { this.props.email || 'asdf@asdf.asdf' }
                    id = "email"
                    type = "text"
                    label = "Driver's Email address"
                    placeholder = "Enter email"
                    errorMessage = "Invalid Email format"
                />
                <Row className="show-grid">
                    <Col sm={ 4 } xs={ 12 } >
                        <DropDown
                            reportValue = { this.getValue }
                            options = { Array.from({ length: 82 }, (v, k) => k + 1940) }
                            defaultValue = { this.props.year || 1940 }
                            id = "year"
                            label = "Year of Birth"
                            errorMessage = "Can't be missing"
                        />
                    </Col>
                    <Col sm={ 4 } xs={ 12 } >
                        <DropDown
                            reportValue = { this.getValue }
                            options = { [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] }
                            defaultValue = { this.props.month || 1 }
                            id = "month"
                            label = "Months of Birdth"
                            errorMessage = "Can't be missing"
                        />
                    </Col>
                    <Col sm={ 4 } xs={ 12 } >
                        <DropDown
                            reportValue = { this.getValue }
                            options = { Array.from({ length: 31 }, (v, k) => k + 1) }
                            defaultValue = { this.props.day || 1 }
                            id = "day"
                            label = "Day of Birdth"
                            errorMessage = "Can't be missing"
                        />
                    </Col>
                </Row>
                <DropDown
                    reportValue = { this.getValue }
                    options = { [ 'BMW 418d', 'Toyota avensis', 'Volkswagen Golf' ] }
                    defaultValue = { this.props.vehicle || 'BMW 418d' }
                    id = "vehicle"
                    label = "Car Model"
                    errorMessage = "Can't be missing"
                />
                <SubmitButton loading = { this.state.loading }>
                    Enter
                </SubmitButton>
            </form>
        )
    }
}

export default Form
