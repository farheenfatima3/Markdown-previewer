import React from 'react';
import './App.css';
import marked from 'marked';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      markdown:placeholder
    }
    this.handleChange=this.handleChange.bind(this)
  }

  handleChange=(e)=>{
    this.setState({
      markdown:e.target.value
    })
  }
  render(){
    const {markdown}=this.state
    const markedText=marked(markdown)
    console.log(markedText)
    return(
      <div>
          <Editor mark={markdown} funForChange={this.handleChange}/>
          <Preview markOut={markedText}/>
      </div>
    )
  }
}

const Editor=(props)=>{
    return(
      <div className="d-flex row mt-3">
         
         <div className="d-flex flex-column"> 
      <div className="d-flex flex-grow-1 flex-column mb-2">
      <h1 className="text-center" id="edit">Editor</h1> 
      <textarea cols="30" rows="5" value={props.mark} onChange={props.funForChange}></textarea>
      </div>
      </div>
      </div>
    )
}

const Preview=(props)=>{
    return(
      <div id="pre">
      <h1 className="text-center" id="prevw">Preview</h1>
      <div dangerouslySetInnerHTML={{__html:props.markOut}}/>
      </div>
    )
}

const placeholder=`
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://images.unsplash.com/photo-1589802829985-817e51171b92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80)
`;

export default App;