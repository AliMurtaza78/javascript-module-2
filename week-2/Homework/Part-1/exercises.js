/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */


function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");

  const createH1 = (content) => {
    const h1 = document.createElement('h1');
    h1.innerHTML = content;
    return h1;
  };
  const h1Elements = arrayOfPeople.map((person) => createH1(person.name));
   h1Elements.forEach((node) => content.appendChild(node));

   const createH2 = (e) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = e;
    return h2;
   };
   const h2Elements = arrayOfPeople.map((person) => createH2(person.job));
   h2Elements.forEach((node) => content.appendChild(node));
}


/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //selecting div id
  let content = document.querySelector("#content");
  // creating ul element
  const unorderedList = document.createElement("ul")
  // appending ul element to the content div
  const ul= content.appendChild(unorderedList)
  // creating arrow function for creating li 
  const createLi = (list) => {
    const li = document.createElement("li");
    li.innerHTML = list;
    return li;
  };
  // using map function 
  const liElements = shopping.map((grocery) => createLi(grocery));
  // Again apending each node to the ul 
  liElements.forEach((node) =>ul.appendChild(node))
}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  const body = document.querySelector("body");
  // Using arrow function to create p elements
  const elementP = (para) =>{
    const p = document.createElement("p")
    p.innerHTML = para;
    return p;
  }
  // using map function
  const booksElements = books.map((book) => elementP(book.title));
  //appending every node to body
  
  // create ul element
  const unorderedList = document.createElement("ul")
  // appending ul element to the content div
  const ul= content.appendChild(unorderedList)
  // creating arrow function for creating li 
  const createLi = (list) => {
    const li = document.createElement("li");
    li.innerHTML = list;
    return li;
  };
  // using map function 
  const liElements = books.map((book) => createLi(book));
  booksElements.forEach((node)=> ul.appendChild(node));



}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true
  }
];

exerciseThree(books);
