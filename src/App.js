import React, { Component } from 'react';
import { marked } from 'marked';
import './App.css';

const placeholder = `# Welcome to React Markdown Previewer
## It uses the Marked library.
Click [here](https://cdnjs.com/libraries/marked) to navigate to the marked library!

This is an inline code block \`<div></div>\`

Below is a multi-line code block:
\`\`\`
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

- This
  - is 
    - a 
      - list
**This is bold text**
> Block Quote

![An Image](https://images.unsplash.com/photo-1640562051318-b849e5290551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markup: placeholder,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markup: event.target.value,
    });
  }

  render() {
    const markdown = marked(this.state.markup);
    marked.setOptions({
      gfm: true,
      breaks: true,
    });
    return (
      <div className="App">
        <h1 className="appHeading">Markdown Previewer</h1>
        <div className="editorDiv">
          <h2 className="panelHead">Editor</h2>
          <textarea
            id="editor"
            onChange={this.handleChange}
            value={this.state.markup}
          />
        </div>

        <div className="previewDiv">
          <h2 className="panelHead">Preview</h2>
          <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
        </div>
      </div>
    );
  }
  return;
}

export default App;
