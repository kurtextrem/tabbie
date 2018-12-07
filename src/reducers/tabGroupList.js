import {
	ADD_TAB_GROUP,
	REMOVE_TAB,
	REMOVE_TAB_GROUP,
	RESYNC_TAB_GROUPS,
} from '../actions'

const tabGroupList = (state = { tabGroups: [] }, action) => {
	switch (action.type) {
		case RESYNC_TAB_GROUPS:
			return {
				...state,
				tabGroups: action.tabGroups,
			}
		case REMOVE_TAB_GROUP: {
			return {
				...state,
				tabGroups: state.tabGroups.filter(
					(tabGroup, i) => i !== action.tabGroupKey
				),
			}
		}
		case ADD_TAB_GROUP:
			if (action.addTo !== undefined && action.addTo !== -1)
				return {
					...state,
					tabGroups: state.tabGroups.map((tabGroup, tabGroupKey) => {
						if (tabGroupKey === action.addTo) {
							return {
								name: action.name,
								tabs: tabGroup.tabs.concat(action.tabs),
							}
						}
						return tabGroup
					}),
				}
			return {
				...state,
				tabGroups: [
					...state.tabGroups,
					{ name: action.name, tabs: action.tabs },
				],
			}
		case REMOVE_TAB:
			return {
				...state,
				tabGroups: state.tabGroups.map((tabGroup, tabGroupKey) => {
					if (tabGroupKey === action.tabGroupKey) {
						return {
							name: tabGroup.name,
							tabs: tabGroup.tabs.filter(
								(tab, tabKey) => tabKey !== action.tabKey
							),
						}
					}
					return tabGroup
				}),
			}
		default:
			return state
	}
}

export default tabGroupList
