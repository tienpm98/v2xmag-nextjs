import { useReducer, createContext } from 'react'
import { menu } from './reducers/menu'
import { podcast } from './reducers/podcast'
const initialState = {
	toggleMenu: false,
	toggleContact: false,
	user: {},
	togglePlay: false,
}

const Context = createContext({})

const combineReducers =
	(...reducers) =>
	(state, action) => {
		for (let i = 0; i < reducers.length; i++) state = reducers[i](state, action)
		return state
	}

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(
		combineReducers(menu, podcast),
		initialState
	)
	const value = { state, dispatch }

	return <Context.Provider value={value}>{children}</Context.Provider>
}

export { Context, Provider }
