import store from '../config/store'

const builConstant = ({ resource, action }) => {
    const resourcesString = resource.map(res => res.toUpperCase()).join('_')
    return `${ resourcesString }_${ action.toUpperCase() }`
}

const buildActionCreator = (action, ...resource) => {
    const meta = { resource, action }
    const type = builConstant(meta)
    const ac = (payload = {}) => ({ type, payload, meta })
    ac.type = type
    ac.dispatch = (...args) => store.dispatch(ac(...args))
    return ac
}

export default buildActionCreator
