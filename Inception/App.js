// React.createElement create an object 
//ReactDOM.createRoot takes that object and render that object in the DOM form


const heading = React.createElement("div", {id: "parent", xyz: "H1element"}, [
    React.createElement("div", {id: "child", xyz: "divelement"}, [
        React.createElement(
            "h2",
            {id: "child1", xyz: "H2element"},
            "I am h2 tag"
        ),
        React.createElement(
            "h2",
            {id: "child2", xyz: "H2element"},
            "I am h2 tag"
        ),
    ]),
    React.createElement("div", {id: "child", xyz: "divelement"}, [
        React.createElement(
            "h2",
            {id: "child1", xyz: "H2element"},
            "I am h2 tag"
        ),
        React.createElement(
            "h2",
            {id: "child2", xyz: "H2element"},
            "I am h2 tag"
        ),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

//!What knowledge i get from this lecture Inception 01;

// ---->
//CDN --> Content Delivery Network
//How to create an element  and render in react 



