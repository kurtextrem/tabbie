import PropTypes from 'prop-types'
import React from 'react'
import TabGroupListEmpty from './TabGroupListEmpty'
import TabGroupListItem from '../containers/TabGroupListItem'
import { listStyle } from '../styles/list'

class TabGroupList extends React.Component {
	ref = null

	setRef = ref => {
		this.ref = ref
	}

	componentDidMount() {
		this.componentDidUpdate()
	}

	componentDidUpdate() {
		if (this.ref !== null && this.ref.parentElement.scrollTop < 200) {
			const children = this.ref.children
			children[children.length - 1].scrollIntoView()
		}
	}

	render() {
		const tabGroups = this.props.tabGroups

		return (
			<ul style={listStyle} ref={this.setRef}>
				{tabGroups.length ? (
					tabGroups.map((tabGroup, i) => <TabGroupListItem {...tabGroup} tabGroupKey={i} key={i} />)
				) : (
					<TabGroupListEmpty />
				)}
			</ul>
		)
	}
}

TabGroupList.propTypes = {
	tabGroups: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
		})
	),
}

export default TabGroupList
