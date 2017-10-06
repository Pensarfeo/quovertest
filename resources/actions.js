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

actions.authentication.authenticate = (data = {}, params = {}, handlers) => (
    axios.post('/authentication/authenticate', data, { params })
        .then((res) => {
            if (handlers.success) return handlers.success(res)
        })
        .catch((res) => {
            if (handlers.error) return handlers.error(res)
        })
)

actions.authentication.logOut = () => {
    actions.user.remove.dispatch()
    axios.post('/authentication/logout')
        .then(() => console.log('user logged out'))
}

actions.draft.create = (data = {}, params = {}, handlers) => {
    axios.post('/be/motor/gap/drafts', createDraft(data))
        .then((response) => {
            actions.draft.add.dispatch(response.data)
            actions.draft.priceRequest({ draftId: response.data.draftId }, params, handlers)
        })
        .catch((res) => {
            if (handlers.error) return handlers.error(res)
        })
}

actions.draft.update = (data = {}, params = {}, handlers) => {
    axios.put(`/be/motor/gap/drafts/${ data.draftId }`, createDraft(data))
        .then((response) => {
            actions.draft.add.dispatch(response.data)
            actions.draft.priceRequest(response.data.draftId, {}, params, handlers)
        })
        .catch((res) => {
            if (handlers.error) return handlers.error(res)
        })
}

actions.draft.priceRequest = (data = {}, params = {}, handlers) => {
    axios.post(`/be/motor/gap/drafts/${ data.draftId }/price-requests`, createPriceRequest())
        .then((response) => {
            response.data.draftId = data.draftId
            actions.draft.priceRequest.add.dispatch(response.data)
            if (handlers.success) return handlers.success(response)
        })
        .catch((res) => {
            if (handlers.error) return handlers.error(res)
        })
}

const leadRequestLoad = {
    partnerReference: [
        {
            key: 'salesId',
            value: '12345678',
        },
        {
            key: 'productId',
            value: '235689',
        },
    ],
    transport: 'EMAIL',
}

actions.draft.lead = (draftId, data = {}, params = {}, handlers) => {
    axios.post(`/be/motor/gap/drafts/${ draftId }/leads`, leadRequestLoad)
        .then((res) => {
            if (handlers.success) return handlers.success(res)
        })
        .catch((res) => {
            if (handlers.error) return handlers.error(res)
        })
}

actions.draft.add = buildActionCreator('add', 'draft')
actions.draft.priceRequest.add = buildActionCreator('add', 'draft', 'priceRequest')
actions.user.add = buildActionCreator('add', 'user')
actions.user.remove = buildActionCreator('remove', 'user')

export default actions
