import axios from 'axios'
import { createDraft, createPriceRequest } from './objectGenerator'
import buildActionCreator from './actionUtils'

const actions = {
    user: {},
    draft: {
        priceRequest: {},
    },
    authentication: {},
}

actions.authentication.authenticate = (data = {}, params = {}, success, error) => (
    axios.post('/authentication/authenticate', data, { params })
        .then(success)
        .catch(error)
)

actions.authentication.logOut = () => {
    actions.user.remove.dispatch()
    axios.post('/authentication/logout')
        .then(() => console.log('user logged out'))
}

actions.draft.create = (data = {}, params = {}, success, error) => {
    axios.post('/be/motor/gap/drafts', createDraft(data))
        .then((response) => {
            actions.draft.add.dispatch(response.data)
            actions.draft.priceRequest(response.data.draftId, {}, params, success, error)
        })
        .catch(error)
}

actions.draft.priceRequest = (draftId, data = {}, params = {}, success, error) => {
    axios.post(`/be/motor/gap/drafts/${ draftId }/price-requests`, createPriceRequest())
        .then((response) => {
            response.data.draftId = draftId
            actions.draft.priceRequest.add.dispatch(response.data)
            success(response)
        })
        .catch(error)
}

actions.draft.add = buildActionCreator('add', 'draft')
actions.draft.priceRequest.add = buildActionCreator('add', 'draft', 'priceRequest')
actions.user.add = buildActionCreator('add', 'user')
actions.user.remove = buildActionCreator('remove', 'user')

export default actions
