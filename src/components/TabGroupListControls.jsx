import Button from './Button'
import PropTypes from 'prop-types'
import React from 'react'
import { getAllTabs, getSelectedTabs } from '../tabManager'
import { inputErrorStyle, inputStyle } from '../styles/input'

const formStyle = {
	display: 'flex',
	flexDirection: 'column',
	marginTop: '0.25em',
	// borderTop: '1px solid #ccc',
}

const formInputStyle = {
	margin: '0.5em 0',
}

const formButtonStyle = {
	marginBottom: '0.25em',
}

const formCheckboxStyle = {
	// marginTop: '0.5em',
}

// (await getSelectedTabs()).length : (await getAllTabs()).length

class ListControls extends React.PureComponent {
	state = { amountOfTabs: 0 }

	componentDidMount() {
		this.componentDidUpdate()
	}

	async componentDidUpdate() {
		this.setState({ amountOfTabs: this.props.saveSelected ? (await getSelectedTabs()).length : (await getAllTabs()).length })
	}

	render() {
		const {
			onClickSetSaveSelected,
			onTabGroupNameChange,
			onSaveTabGroupClick,
			saveSelected,
			tabGroupError,
			tabGroupName,
			addTo,
		} = this.props
		return (
			<form style={formStyle}>
				<label htmlFor="input-tab-group-name">
					<strong>{addTo !== -1 ? `Add Tabs to ${tabGroupName}` : 'New Tab Group Name'}</strong>
				</label>
				<input
					id="input-tab-group-name"
					onChange={onTabGroupNameChange}
					placeholder={"Ex. Yesterday's Work"}
					value={tabGroupName}
					style={tabGroupError ? { ...inputErrorStyle, ...formInputStyle } : { ...inputStyle, ...formInputStyle }}
				/>
				<span style={formButtonStyle}>
					<Button
						onClick={e => {
							e.preventDefault()
							onSaveTabGroupClick({
								addTo,
								close: false,
								saveSelected,
								tabGroupName,
							})
						}}
						type="primary"
						fullWidth>
						{addTo !== -1 ? 'Add' : 'Save'} {saveSelected ? 'Selected' : 'All'} Tabs ({this.state.amountOfTabs})
					</Button>
				</span>
				<span style={formButtonStyle}>
					<Button
						onClick={e => {
							e.preventDefault()
							onSaveTabGroupClick({
								addTo,
								close: true,
								saveSelected,
								tabGroupName,
							})
						}}
						hoverId="tab-group-list-controls/save-and-close"
						fullWidth>
						{addTo !== -1 ? 'Add' : 'Save'} & Close {saveSelected ? 'Selected' : 'All'} Tabs
					</Button>
				</span>
				<label style={formCheckboxStyle} htmlFor="cb-save-selected-tabs">
					<input
						type="checkbox"
						id="cb-save-selected-tabs"
						checked={saveSelected}
						onClick={() => onClickSetSaveSelected(!saveSelected)}
						readOnly
					/>{' '}
					Only {addTo !== -1 ? 'Add' : 'Save'} Selected Tabs
				</label>
			</form>
		)
	}
}

ListControls.propTypes = {
	addTo: PropTypes.number,
	amountOfTabs: PropTypes.number,
	onClickSetSaveSelected: PropTypes.func.isRequired,
	onSaveTabGroupClick: PropTypes.func,
	onTabGroupNameChange: PropTypes.func,
	saveSelected: PropTypes.bool.isRequired,
	tabGroupError: PropTypes.bool,
	tabGroupName: PropTypes.string,
}

export default ListControls
