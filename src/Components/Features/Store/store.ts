import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Reducer as ReducerMap } from '../SimpleMap/Model/reducer'
import { Reducer as ReducerPoints } from '../PointsManager/Model/reducer'
import { Reducer as ReducerError } from '../Errors/model/reducer'

const rootReducer = combineReducers({
	PointsReducer: ReducerPoints,
	MapReducer: ReducerMap,
	ErrorReducer: ReducerError,
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never

export type InferActionsType<
	T extends { [key: string]: (...args: any[]) => any }
> = ReturnType<PropertiesType<T>>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
