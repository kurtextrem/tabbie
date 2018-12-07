import Button from './Button'
import ExportButton from './ExportButton'
import ImportButton from './ImportButton'
import PropTypes from 'prop-types'
import React from 'react'
import TabGroupList from '../containers/TabGroupList'
import TabGroupListControls from '../containers/TabGroupListControls'
import titleStyle from '../styles/title'

const tabGroupListStyle = {
	flexGrow: 1,
	overflowY: 'auto',
	boxShadow: 'inset 0 -10px 3px -10px #000000',
}

const wrapperStyle = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
}

const navStyle = {
	display: 'flex',
	flexDirection: 'row',
}

const TabGroupListView = () => (
	<div style={wrapperStyle}>
		<nav style={navStyle}>
			<h1 style={titleStyle}>Saved Tab Groups</h1>
			<ExportButton />
			<ImportButton />
		</nav>
		<div style={tabGroupListStyle}>
			<TabGroupList />
		</div>
		<TabGroupListControls />
	</div>
)

export default TabGroupListView
