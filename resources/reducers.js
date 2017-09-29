import actions from './actions'
import axios from 'axios'
// user reducer

function user(state = {}, action) {
    switch (action.type) {
    case actions.user.add.type:
        axios.defaults.headers.post.Authorization = `Bearer ${ action.payload.token }`
        localStorage.setItem('token', action.payload.token)
        return Object.assign({}, state, action.payload)
    case actions.user.remove.type:
        localStorage.removeItem('token')
        return {}
    default:
        return state
    }
}

function drafts(state = {}, action) {
    switch (action.type) {
    case actions.draft.add.type:
        return Object.assign({}, state, { [ action.payload.draftId ]: action.payload })
    case actions.draft.priceRequest.add.type: {
        const currentDraft = state[ action.payload.draftId ]
        const newDraft = Object.assign({}, currentDraft, { priceRequest: action.payload })
        return Object.assign({}, state, { [ action.payload.draftId ]: newDraft })
    }
    default:
        return state
    }
}

export { user, drafts }
