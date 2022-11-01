  marked.setOptions({
  renderer: new marked.Renderer(),
  langPrefix: 'hljs language-',
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false
});
  let inputText = `# Checking out markdown language...

## Here you will find a cool function showing the point of Life.
### Plus something almost as cool...
#### Can you guess?

##### POLYMERS...**duh!**

###### Follow the directions below...

Note this code block to the right... \`<section></section>\`.

\`\`\`
// Follow this in-line code to find the pointgOfLife:

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

![Material Informatics](https://scx1.b-cdn.net/csz/news/800a/2017/blockcopolym.jpg)
`;
  let editorBox = document.getElementById('editor');
  let previewBox = document.getElementById("preview");

editorBox.innerHTML = inputText;
previewBox.innerHTML = marked.parse(inputText);

editorBox.addEventListener('keyup', function(){
  let add = $("#editor").val();
  previewBox.innerHTML = marked.parse(add);
})
