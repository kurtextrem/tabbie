import Button from './Button'
import React from 'react'
import { getState } from '../chromeStorage';

function download(filename, text) {
  const element = document.createElement('a');
  element.setAttribute(
    'href',
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`,
  );
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

async function onClick(e) {
  const state = await getState();
  download('tabbie.json', JSON.stringify(state));
}

const exportStyle = {
  marginRight: '0.25em',
};

const ExportButton = () => (
  <div title="Export all groups as JSON file" style={exportStyle}>
  <Button onClick={onClick}>💾</Button>
	</div>
);

export default ExportButton;
