export function menu(state, action) {
	switch (action.type) {
		case 'TOGGLE_MENU':
			return { ...state, toggleMenu: action.payload }
		case 'TOGGLE_CONTACT':
			return { ...state, toggleContact: action.payload }
		default:
			return state
	}
}
