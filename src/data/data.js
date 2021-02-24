export const NOTE_TYPE = {
    TEXT: "text",
    LINK: "link"
}

export const NO_PROJECT = "no project"

export default {
    "Learn React" : [
        {
            type: NOTE_TYPE.TEXT,
            title: "Create a new project",
            text: "cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"
        },
        {
            type: NOTE_TYPE.LINK,
            url: "https://reactjs.org/docs/getting-started.html",
            text: "React docs"
        },
        {
            type: NOTE_TYPE.LINK,
            url: "https://reactstrap.github.io/",
            text: "Reactstrap docs"
        },
        {
            type: NOTE_TYPE.TEXT,
            title: "Create a new project",
        },
        {
            type: NOTE_TYPE.TEXT,
            text: "cd to the project directory\nnpx create-react-app project-name\ncd project-name\nnpm start"
        },
        {
            type: NOTE_TYPE.TEXT,
            title: "Tutorial",
            text: "We will build a small game during this tutorial. You might be tempted to skip it because you’re not building games — but give it a chance. "
        },
        
    ],
    [NO_PROJECT]: [
        {
            type: NOTE_TYPE.TEXT,
            title: "Lorem ipsum",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet massa vitae tortor condimentum. "
        },
        {
            type: NOTE_TYPE.LINK,
            url: "https://loremipsum.io/generator/",
            text: "Lorem Ipsum generator"
        },
    ]
}