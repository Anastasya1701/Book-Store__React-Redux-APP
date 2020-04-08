import {createStore, compose} from 'redux'
import {reducer} from './reducers'

const stringEnhancer = (createStore) => (...arg) => {
    const store = createStore(...arg)
    const originalStore = store.dispatch
    store.dispatch = (action) => {
        if(typeof action === 'string') {
            return originalStore({
                type: action
            })
        }
        return originalStore(action)
    }
   return store
}

const logEnhancer = (createStore) => (...arg) => {
    const store = createStore(...arg)
    const originalDispatch = store.dispatch
    store.dispatch = (action) => {
        console.log(action)
        return originalDispatch(action)
    }
    return store
}

const store = createStore(reducer, compose(stringEnhancer, logEnhancer))

export default store
