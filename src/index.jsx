import React from 'react'
import TabGroupDetailsView from './containers/TabGroupDetailsView'
import TabGroupListView from './components/TabGroupListView'
import chromeStorage from './middleware/chromeStorage'
import tabManager from './middleware/tabManager'
import tabbieApp from './reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { Route, Router, browserHistory } from 'react-router'
import { applyMiddleware, createStore } from 'redux'
import { render } from 'react-dom'
import { screenView } from './actions'

const appStyle = {
	boxSizing: 'border-box',
	height: '40em',
	paddingBottom: '1em',
	paddingLeft: '2em',
	paddingRight: '2em',
	paddingTop: '1em',
	width: '30em',
}

document.addEventListener('DOMContentLoaded', () => {
	const store = createStore(tabbieApp, applyMiddleware(thunk, chromeStorage, tabManager))
	render(
		<Provider store={store}>
			<div style={appStyle}>
				<Router history={browserHistory}>
					<Route
						path="/details/:tabGroupKey"
						component={TabGroupDetailsView}
						onEnter={() => store.dispatch(screenView('TabGroupDetails'))}
					/>
					<Route path="*" component={TabGroupListView} onEnter={() => store.dispatch(screenView('TabGroupList'))} />
				</Router>
			</div>
		</Provider>,
		document.getElementById('container')
	)
})
