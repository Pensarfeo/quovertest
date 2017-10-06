import React from 'react'
import { Button } from 'react-bootstrap'
import Loading  from 'react-loading-spinner'

const fullWidth = { width: '100%' }

const spinner = () => <div />
const SubmitButton = (props) => {
    console.log(props)
    return (<Button
        style = { fullWidth }
        type = "submit"
        disabled = { props.loading }
    >
        <Loading isLoading = { props.loading } spinner = { spinner } loadingClassName = "loader" />
        {props.children}
    </Button>)
}

export default SubmitButton
