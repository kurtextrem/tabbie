import React from 'react'
import Button from './Button'
import { setState } from '../chromeStorage'

const inputStyle = {
	display: 'none',
}

const labelStyle = {
	cursor: 'pointer',
}

function setStateFromResult(result) {
	setState(JSON.parse(result))
}

class ImportButton extends React.Component {
	constructor() {
		super()

		this.input = null
	}

	setRef = input => {
		this.input = input
	}

	onChange = e => {
		this.handleFile(this.input.files)
	}

	handleFile = files => {
		const file = files[0]
		if (file.type !== 'application/json') return

		const reader = new FileReader()
		reader.onload = () => setStateFromResult(reader.result)
		reader.readAsText(file)
	}

	render() {
		return (
			<div title="Import from JSON file">
				<input
					id="importJSON"
					type="file"
					style={inputStyle}
					onChange={this.onChange}
					accept=".json"
					ref={this.setRef}
				/>
				<label htmlFor="importJSON" style={labelStyle}>
					💿
				</label>
			</div>
		)
	}
}

export default ImportButton
