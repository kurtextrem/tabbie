import PropTypes from 'prop-types'
import React from 'react'
import TabGroupDetailsItem from '../containers/TabGroupDetailsItem'
import TabGroupListControls from '../containers/TabGroupListControls'
import linkStyle from '../styles/link'
import titleStyle from '../styles/title'
import { Link } from 'react-router'
import { listStyle } from '../styles/list'

const titleBarStyle = {
	display: 'flex',
	alignItems: 'baseline',
	marginBottom: '0.5em',
}

const titleCustomStyle = {
	flexGrow: 1,
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	marginRight: '1em',
}

const wrapperStyle = {
	height: '100%',
	display: 'flex',
	flexDirection: 'column',
}

const customLinkStyle = {
	whiteSpace: 'nowrap',
}

const listWrapper = {
	overflowY: 'auto',
}

const TabGroupDetailsView = ({ tabGroup, tabGroupKey }) => (
	<div style={wrapperStyle}>
		<div style={titleBarStyle}>
			<h1 style={{ ...titleStyle, ...titleCustomStyle }}>{tabGroup.name}</h1>
			<Link to="/popup.html" style={{ ...linkStyle, ...customLinkStyle }}>
				« back
			</Link>
		</div>
		<div style={listWrapper}>
			<ul style={{ ...listStyle }}>
				{tabGroup.tabs.map((tab, i) => (
					<TabGroupDetailsItem
						tabKey={i}
						tabGroupKey={tabGroupKey}
						pinned={tab.pinned}
						url={tab.url}
						key={i}
					/>
				))}
			</ul>
		</div>
		<TabGroupListControls tabGroupName={tabGroup.name} addTo={tabGroupKey} />
	</div>
)

TabGroupDetailsView.propTypes = {
	tabGroup: PropTypes.shape({
		name: PropTypes.string,
		tabs: PropTypes.arrayOf(
			PropTypes.shape({
				pinned: PropTypes.bool,
				url: PropTypes.string,
			})
		),
	}),
	tabGroupKey: PropTypes.number,
}

export default TabGroupDetailsView
