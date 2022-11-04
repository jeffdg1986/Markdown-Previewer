import React, { Component } from 'react';
import { marked } from 'marked';
class ProjectHolder extends Component { 
    state = {
        input: 
`# Checking out markdown language...
## Here you will find a cool function showing the point of Life.
### Plus something almost as cool...
#### Can you guess?

##### POLYMERS...**duh!**

###### Follow the directions below...
        
Note this code block to the right... \`<section></section>\`.
        
\`\`\`
// Follow this in-line code to find the pointOfLife:
        
    function pointOfLife(money, health, career) {
    return love
          }
\`\`\`

Click on this [link](https://www.polymerdatabase.com/main.html) for an encyclopedia of polymer physics and chemistry!
> This blockquote will help with the transition to polymers...
###### Did it work?
        
### Types of Polymers
1. Thermoplastics
2. Thermosets
3. Elastomers
        
![Material Informatics](https://scx1.b-cdn.net/csz/news/800a/2017/blockcopolym.jpg)`,
     };
     

     handleChange = (e) => {
        this.setState({
            input: e.target.value,
        })
     }
    render() { 
        return (
            <>
            <main>
            <h1>Welcome to Jeff's Markdown Previewer</h1>
            <div id="text-editor-wrapper" className="container">
                <header id="editor-header">
                    <span id="title" className="oneLine">Editor</span>
                    <img src="https://img.icons8.com/sf-regular/344/peptide.png" id="image" className="oneLine" alt = 'https://www.google.com'></img>
                </header>
                <textarea id="editor" className="container-fluid" onChange = {this.handleChange} value = {this.state.input}></textarea>
            </div>
            <div id="preview-wrapper" className="container">
            <header id="preview-header">
                <span id="title" className="oneLine">Preview</span>
                <img src="https://img.icons8.com/sf-regular/344/peptide.png" id="image" className="oneLine" alt='https://www.google.com'></img>
            </header>
                <div id="preview" className="container-fluid" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></div>
            </div>
            <footer>This satisfies the requirements of the FCC Front-End library certification - Project #2</footer>
            </main>
        </>
        );
    }
}
 
export default ProjectHolder;