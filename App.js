const heading = React.createElement('h1', {id: 'heading'}, 'Hello World from React!'); // returns a react element which is an object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading); // render function converts the react element into a html tag

// to create nested html structure
// <div id="parent">
//     <div id="child">
//         <h1>

//         </h1>
//         <h2>

//         </h2>
//     </div>
// </div>
const parent = React.createElement(
    'div', 
    {id: 'parent'}, 
    React.createElement(
    'div', 
    {id: 'child'}, [
    React.createElement('h1', {}, 'I am a h1 tag'),
    React.createElement('h2', {}, 'I am a h2 tag'),
    ])
); // but as application becomes big it becomes difficult to create structure like this



