import React from 'react'
import { connect } from 'react-redux'
import { Panel, Table, Button, Grid, Row, Col } from 'react-bootstrap'

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

const draftStyle = { marginTop: '20px' }
const draft = props => (
    <Panel header={ `vehicle ${ vehicles[ props.risk.vehicle.details.code ] }` } style = { draftStyle }>
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
