import Button from './Button'
import PropTypes from 'prop-types'
import React from 'react'
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

const ListControls = ({
	onClickSetSaveSelected,
	onTabGroupNameChange,
	onSaveTabGroupClick,
	saveSelected,
	tabGroupError,
	tabGroupName,
	addTo,
}) => (
	<form style={formStyle}>
		<label htmlFor="input-tab-group-name">
			<strong>
				{addTo !== -1 ? `Add Tabs to ${tabGroupName}` : 'New Tab Group Name'}
			</strong>
		</label>
		<input
			id="input-tab-group-name"
			onChange={onTabGroupNameChange}
			placeholder={"Ex. Yesterday's Work"}
			value={tabGroupName}
			style={
				tabGroupError
					? { ...inputErrorStyle, ...formInputStyle }
					: { ...inputStyle, ...formInputStyle }
			}
		/>
		<span style={formButtonStyle}>
			<Button
				onClick={e => {
					e.preventDefault()
					onSaveTabGroupClick({
						tabGroupName,
						saveSelected,
						close: false,
						addTo,
					})
				}}
				type="primary"
				fullWidth
			>
				{addTo !== -1 ? 'Add' : 'Save'} {saveSelected ? 'Selected' : 'All'} Tabs
			</Button>
		</span>
		<span style={formButtonStyle}>
			<Button
				onClick={e => {
					e.preventDefault()
					onSaveTabGroupClick({
						tabGroupName,
						saveSelected,
						close: true,
						addTo,
					})
				}}
				hoverId="tab-group-list-controls/save-and-close"
				fullWidth
			>
				{addTo !== -1 ? 'Add' : 'Save'} & Close{' '}
				{saveSelected ? 'Selected' : 'All'} Tabs
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

ListControls.propTypes = {
	onTabGroupNameChange: PropTypes.func,
	onClickSetSaveSelected: PropTypes.func.isRequired,
	onSaveTabGroupClick: PropTypes.func,
	saveSelected: PropTypes.bool.isRequired,
	tabGroupError: PropTypes.bool,
	tabGroupName: PropTypes.string,
	addTo: PropTypes.number,
}

export default ListControls
