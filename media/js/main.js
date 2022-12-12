/*

Author : Chauhan Pruthviraj

Developer : Chauhan Pruthviraj.

Email : cppitlab@protonmail.com

Website : https://cppitlab.github.io/jscode/cppitlab.js

Note : this Javascript Library Helps you Build website quickly

*/

export class cppitlab {

    createElement(elementName) {
        // this method is used to create element 
        if (elementName !== undefined && elementName !== null && typeof elementName == "string")
            this.element = document.createElement(elementName);
    }
    addAttribute(attributeName, value) {
        /*
        this method helps to set attribute for your element
        */
        if (attributeName !== null && value !== null && (typeof attributeName == "string" && typeof value == "string"))
            this.element.setAttribute(attributeName, value);
    }
    addStyle(data) { // this method is used to add style in element. style css data must be written in object
        if (data !== undefined && data !== null && typeof data == "object")
            this.style = data;
        for (let prop in data) {
            console.log(prop)
            this.element.style[prop] = data[prop];
        }
    }
    addData(content) {
        // this method is used to add data.. you can add HTML element with data for example <h1> hello world </h1>
        if (content !== null && content !== undefined && typeof content === "string")
            this.element.innerHTML = content;
    }
    showInfo() {
        // this method will show information about element
        if (this.element !== undefined && this.element !== null) {
            console.log("======================== Information =============================");
            console.log("Element you Created : ", this.element);
            console.log("==================================================================");

        }
    }
    mount(where) {
        /*
        this method tells javascript where to mount element. in this case you have to choose class name of parent element inside you want to 
        mount your newly created element
        */
        if (this.element !== null && this.element !== undefined) {
            document.querySelector("." + where).append(this.element)
        }
    }
    remove() {
        /*
        this method removes your newly created element from dom
        */
        if (this.element !== null && this.element !== undefined) {
            this.element.parentNode.removeChild(this.element);
            this.element = null;
        }
        else { console.log("null element can't be removed"); }
    }


}; // end of class
