import TabGroupListControls from '../components/TabGroupListControls'
import { connect } from 'react-redux'
import { saveTabGroup, setSaveSelected, tabGroupNameChange } from '../actions'

const mapStateToProps = (state, ownProps) => {
	const controls = state.tabGroupListControls

	const addTo = ownProps.addTo
	controls.addTo = Number.isInteger(addTo) ? addTo : -1
	if (addTo !== undefined && addTo !== -1 && controls.tabGroupName === '')
		controls.tabGroupName = ownProps.tabGroupName

	return controls
}
const mapDispatchToProps = dispatch => ({
	onClickSetSaveSelected: saveSelected =>
		dispatch(setSaveSelected({ saveSelected, sync: true })),
	onTabGroupNameChange: e => dispatch(tabGroupNameChange(e.target.value)),
	onSaveTabGroupClick: ({ tabGroupName, close, saveSelected, addTo }) =>
		dispatch(saveTabGroup({ tabGroupName, close, saveSelected, addTo })),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TabGroupListControls)
