import React from 'react'
import { connect } from 'react-redux'
import BasicForm from './components/basicForm'
import DraftForm from './draftForm'

import SubmitButton from './components/submitButton'
import { Button, Panel, Table, Grid, Row, Col } from 'react-bootstrap'

import actions from '../resources/actions'

const vehicles = {
    114980: 'BMW 418d',
    117499: 'Toyota avensis',
    101181: 'Volkswagen Golf',
}

const Prices = ({ length, price }) => (
    <tr>
        <td>{length}</td>
        <td>{price.value} {price.currency}</td>
        <td><Button> Select </Button></td>
    </tr>
)

const draftHeaderLeadStyle = {
    dispaly: 'inline-block',
    float: 'right',
}

class DraftHeaderFrom extends BasicForm {
    action = (value, ops, handleSuccess, handleError) => {
        actions.draft.lead(this.props.id, value, ops, handleSuccess, handleError)
    }

    render() {
        return (
            <form onSubmit = { this.handleSubmit } style = { draftHeaderLeadStyle }>
                <SubmitButton loading = { this.state.loading }>
                    Lead
                </SubmitButton>
            </form>
        )
    }
}

const draftHeaderStyle = { padding: '6px 12px', display: 'inline-block' }

class DraftHeader extends React.Component {
    state = { editing: false }
    toggleEdit = () => {
        this.setState(oldState => ({ editing: !oldState.editing }))
    }
    render() {
        console.log(this.state)
        return (
            <Row className="show-grid" >
                <Col sm={ 4 } >
                    <div style = { draftHeaderStyle }> Vehicle: {this.props.vahicleType} </div>
                </Col>
                <Col sm={ 2 } smOffset={ 4 } >
                    <Button onClick = { this.toggleEdit }>
                        {this.state.editing ? 'Hide' : 'Edit'}
                    </Button>
                </Col>
                <Col sm={ 2 } >
                    <DraftHeaderFrom id = { this.props.id } />
                </Col>
                <Row className="show-grid" >
                    <Col sm={ 10 } smOffset={ 1 } >
                        {this.state.editing ? <DraftForm /> : ''}
                    </Col>
                </Row>
            </Row>
        )
    }
}

const draftStyle = { marginTop: '20px' }
const draft = props => (
    <Panel header={ <DraftHeader vahicleType = { vehicles[ props.risk.vehicle.details.code ] } id = { props.draftId } /> } style = { draftStyle }>
        <Table striped bordered condensed hover>
            <thead>
                <tr>
                    <th> Duration ( Months )</th>
                    <th> Price per Year </th>
                    <th> Select </th>
                </tr>
            </thead>
            <tbody>
                {props.priceRequest && props.priceRequest.prices.map(price =>
                    <Prices key = { price.variant } price = { price.pricePerYear } length = { price.variant.replace('GAP', '') } />,
                )}
            </tbody>
        </Table>
    </Panel>
)

const mapStateToProps = ({ drafts }, { id }) => drafts[ id ]
const Draft = connect(mapStateToProps)(draft)

const Drafts = ({ drafts }) => (
    <Grid>
        <Row className="show-grid" >
            <Col sm={ 8 } smOffset={ 2 } xs={ 12 } >
                {drafts.map(id => <Draft id = { id } key={ id } />)}
            </Col>
        </Row>
    </Grid>
)

export default connect(({ drafts }) => ({ drafts: Object.keys(drafts) }))(Drafts)
