// Master saga to be called for all 'standard actions'
export function* resourcesSaga(action) {
    const { resource, substates, functionality } = action.meta
    try {
        const response = yield call(api[ functionality ], resource, action.payload, substates)
        yield put(mergeJsonApiResources(response))
        yield put(cloneAction(action, 'success', response))
    } catch (e) {
        yield put(cloneAction(action, 'error', undefined, e.json.erros))
    }
}

// only take standard actions on request status
export function* resourcesSagaWatcher() {
    yield takeEvery((action) => {
        if (!action.meta) return false
        const { resource } = action.meta
        const isInResources = resources.some(res => res.includes(resource))
        const isRequest = action.meta.status === 'request'
        return isInResources && isRequest
    }, resourcesSaga)
}

// Saga to use if called directly.
export function* localSaga(action, success, error) {
    const { resource, functionality, substates } = action.meta
    try {
        const response = yield call(api[ functionality ], resource, action.payload, substates)
        yield put(mergeJsonApiResources(response))
        if (success) yield success()
    } catch (e) {
        if (error) yield error(e.json.errors)
    }
}
