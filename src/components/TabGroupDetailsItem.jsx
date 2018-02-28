import React from 'react'
import PropTypes from 'prop-types'
import parse from 'url-parse'
import Button from './Button'
import { listItemStyle } from '../styles/list'
import { grey } from '../styles/colors'

const urlStyle = {
	flexGrow: 1,
	marginRight: '1rem',
}

const customListStyle = {
	alignItems: 'center',
}

const ellipsisStyle = {
	whiteSpace: 'nowrap',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
}

const urlPathStyle = {
	color: grey,
}

const pinnedStyle = {
	marginRight: '1rem',
}

const renderUrl = url => {
	const parsedUrl = parse(url)
	const pathAndHash =
		parsedUrl.pathname + parsedUrl.query + parsedUrl.hash !== '/' ? (
			<small>
				{parsedUrl.pathname}
				{parsedUrl.query}
				{parsedUrl.hash}
			</small>
		) : null
	return (
		<div style={ellipsisStyle}>
			<div>
				{parsedUrl.protocol}
				{'//'}
				{parsedUrl.auth}
				{parsedUrl.host}
			</div>
			<a href={parsedUrl} target="_blank" rel="noopener" style={urlPathStyle}>
				{pathAndHash}
			</a>
		</div>
	)
}

const renderPinned = () => (
	<div style={pinnedStyle}>
		<Button type={'primary'}>📌</Button>
	</div>
)

/* eslint-disable react/prop-types */

const renderRemove = ({ tabKey, tabGroupKey, onRemoveClick }) => (
	<div>
		<Button type={'warning'} hoverId={`tab-group-details-item/remove-${tabKey}`} onClick={() => onRemoveClick({ tabKey, tabGroupKey })}>
			remove
		</Button>
	</div>
)

/* eslint-enable react/prop-types */

const TabGroupDetailsItem = ({ pinned, url, tabKey, tabGroupKey, onRemoveClick }) => (
	<li style={{ ...listItemStyle, ...customListStyle }}>
		<div style={{ ...urlStyle, ...ellipsisStyle }}>{renderUrl(url, pinned)}</div>
		{pinned ? renderPinned() : null}
		{renderRemove({ tabKey, tabGroupKey, onRemoveClick })}
	</li>
)

TabGroupDetailsItem.propTypes = {
	tabKey: PropTypes.number,
	tabGroupKey: PropTypes.number,
	onRemoveClick: PropTypes.func,
	pinned: PropTypes.bool,
	url: PropTypes.string,
}

export default TabGroupDetailsItem
