# react-firstcomponent
## Spiderman 🕷️ movies details 🎥💜

Hey 👋 Spiderman fans ❤️ this repo is a collection of all your favorite Spiderman series.

| # | Actors          | Directors | Year      |
| - | --------------- | --------- | --------- |
| 1 | Tobey Maguire   | Sam Raimi | 2002—2007 |
| 2 | Andrew Garfield | Marc Webb | 2012—2014 |
| 3 | Tom Holland     | Jon Watts | 2017—2021 |

From the selection, 🤔 choose your favorite actor and **react** will display all available movies as a component based UI cards, ✨ inspired by **Google**.

A small piece of **JSON data** is also used, you can find it in the repo 💜

## Project setup 💡

🔗 This project is created using [Vite](https://vitejs.dev/), a faster and leaner development experience for modern web projects.

To view the project — clone the repo and type commands in the console:
```
cd react-firstcomponent
npm install
npm run spiderman
```
This will open a development server on **localhost:3000** 🚀 — but why we need **Vite**?

> A module bundler is a tool that takes pieces of JavaScript and their dependencies and bundles them into a single file, usually for use in the browser.

![preview of project](./preview.gif "React.js components ✨")

## React.js components 💪
A component is a useful piece of code, in which you can pass different data and render as a UI component 🔮

For example, consider you have these contacts-data from ☎️ phonebook.
```
[
    { name: "Tobey Maguire",   phone: "202-555-0117" },
    { name: "Kirsten Dunst",   phone: "202-555-0145" },
    { name: "Andrew Garfield", phone: "202-555-0112" },
    { name: "Emma Stone",      phone: "202-555-0172" },
    { name: "Tom Holland",     phone: "202-555-0160" },
    { name: "Zendaya",         phone: "202-555-0106" },
]
```
Now, create a `contact.jsx` ✨ component, while assuming this will receive a contact object as `props` — read the documentation [here](https://reactjs.org/docs/components-and-props.html) on react components.
```
function Contact(props) {
    return (
        <div className="contact-card">
            <h3>{props.info.name}</h3>
            <p>{props.info.phone}</p>
        </div>
    )
};
```
In the `main.js` import the **contact** component and pass each person's data using `.map()` method — this will returns the array of all contact-cards which will then 📺 rendered on the screen.
```
import Contact from './contact';

ReactDOM.render(
    <div className="contact-list">
        {phonebook.map(person => <Contact info={person}/>)}
    </div>,
    document.getElementById('root')
);
```
## Congratulations! 🥳🎉
You have created your first **component** using React.js

🔗 But there's more you can read on https://reactjs.org/docs/react-component.html