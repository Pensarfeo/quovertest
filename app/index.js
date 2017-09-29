import React from 'react'
import { connect } from 'react-redux'
import Header from './header'
import LogIn from './login'
import DraftForm from './draftForm'
import Drafts from './drafts'

const App = ({ user }) => {
    if (!user.token) return <LogIn />
    return (
        <div>
            <Header />
            <DraftForm />
            <Drafts />
        </div>
    )
}

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(App)
