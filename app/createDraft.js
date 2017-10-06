import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Form from './draftForm'

const DraftForm = () => {
    const centerStyle = { display: 'flex', alignItems: 'center' }
    return (
        <Grid>
            <Row className="show-grid" style={ centerStyle }>
                <Col sm={ 8 } smOffset={ 2 } xs={ 12 } >
                    <Form />
                </Col>
            </Row>
        </Grid>
    )
}

export default DraftForm
