'use strict';
const spawn = require('child_process').spawn;

function toResult(open) {
  return {
    title: 'Put your computer to sleep',
    onSelect: () => {
      spawn('pmset', ['sleepnow']);
    }
  }
}

const plugin = ({term, display, actions}) => {
  if (term === 'sleep') {
    display(toResult(actions.open));
  }
};

module.exports = {
  fn: plugin
}
