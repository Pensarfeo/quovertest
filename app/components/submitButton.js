import React from 'react'
import { Button } from 'react-bootstrap'

const fullWidth = { width: '100%' }

const SubmitButton = props => (
    <Button
        style = { fullWidth }
        type = "submit"
        disabled = { props.loading }
    >
        {props.children}
    </Button>
)

export default SubmitButton
