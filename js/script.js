//Global Variables
let id;
let name;
let ext;
let email;
let department;
let submit;
let empForm;
let output;
let form;

//Helper function to get dom elements
const $ = (id) => {
    return document.getElementById(id);
};

window.addEventListener('load', init);

function init() {
    // Get Dom Elements
    empForm = $('empForm');
    id = $('id');
    name = $('name');
    ext = $('ext');
    email = $('email');
    department =  $('department');
    
    //Get data from the form from textvboxes and select field and
    //display result in the console window for now!!
    empForm.addEventListener('submit', function(e) {
        e.preventDefault();
        id = id.value;
        name = name.value;
        ext  = ext.value;
        email = email.value;
        department = department.value;
        console.log(`Id: ${id} `);
        console.log("Name:" + name);
        console.log("Extension: " + ext);
        console.log(`Email:  ${email}`);
        console.log(`Department: ${department}`);
    });
}