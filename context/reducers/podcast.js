export function podcast(state, action) {
	switch (action.type) {
		case 'TOGGLE_PLAY':
			return { ...state, togglePlay: action.payload }
		default:
			return state
	}
}
