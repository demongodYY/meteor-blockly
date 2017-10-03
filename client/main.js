import { Template } from 'meteor/templating';
import Blockly from 'node-blockly/browser';
// import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


let editor;
let template;

function render(element, toolbox) {

  editor = Blockly.inject(element, {
    toolbox: template.find(toolbox)
  })


  editor.addChangeListener(updateCode);

  return editor
}
function updateCode() {
  console.log('haha');
  template.find('#js').innerText = Blockly.JavaScript.workspaceToCode(editor)
  template.find('#php').innerText = Blockly.PHP.workspaceToCode(editor)
  template.find('#lua').innerText = Blockly.Lua.workspaceToCode(editor)
  template.find('#dart').innerText = Blockly.Dart.workspaceToCode(editor)
  template.find('#python').innerText = Blockly.Python.workspaceToCode(editor)
}

Template.editor.onRendered(function helloOnCreated() {
  // let editor;
  // let code = this.find('#startBlocks');
  template = this;
  editor = render ('editor', '#toolbox');
  updateCode();

});
