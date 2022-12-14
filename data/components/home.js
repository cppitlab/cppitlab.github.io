import { cppitlab } from "../../media/js/main.js";
import { style } from "../styleData/homePage.js";
import * as pruthviraj from "../../media/js/tools.js"; // for open and close navigation

// ===========

console.log("==>", pruthviraj)

// ==================

export const header = new cppitlab;
header.createElement("header");
header.addStyle(style.headerStyle);
header.mount("body");
header.addAttribute("class", "header");

export const title = new cppitlab;
title.createElement("h1");
title.addStyle(style.titleStyle);
title.addAttribute("title", "cppitlab");
title.addData("C++");
title.mount("header")

export const menu = new cppitlab;
menu.createElement("div");
menu.addAttribute("class", "menu");
menu.addStyle(style.menuStyle);
menu.mount("header");
menu.addData("<hr /> <hr /> <hr />");
menu.addEvent("click", pruthviraj.openNav);


// ============= Navigation menu Related Data =============

export const nav = new cppitlab;
nav.createElement("nav");
nav.addStyle(style.navStyle);
nav.addAttribute("class", "nav");
nav.mount("body");

const navData = "<div style='display:flex; align-items:center; justify-content:flex-start; flex-direction:column'>" +
    "<p class='pbutton'>About</p>" +
    "<p class='pbutton'>Blog</p>" +
    "<p class='pbutton'>Computer</p>" +
    "<p class='pbutton'>Download</p>" +
    "<p class='pbutton'>More</p>" +

    "</div>";
nav.addData(navData);

const closeButton = new cppitlab;
closeButton.createElement("button");
closeButton.addAttribute("class", "button");
closeButton.mount("nav");
closeButton.addEvent("click", pruthviraj.closeNav)
closeButton.addData("Close");
// =========== main component ==========

export const main = new cppitlab;
main.createElement("main");
main.addStyle(style.mainStyle);
main.addAttribute("class", "main");
main.mount("body");

// ========== Article component ========

export const article = new cppitlab;

article.createElement("article");
article.addAttribute("class", "article");
article.addStyle(style.articleStyle);
article.mount("main");

// ========= Section Component =========

export const section = new cppitlab;
section.createElement("section");
section.addAttribute("class", "section");
section.addStyle(style.sectionStyle);
section.mount("article");
// ========== Aside Component =======

export const aside = new cppitlab;
aside.createElement("aside");
aside.addAttribute("class", "aside");
aside.addStyle(style.asideStyle);
aside.mount("main");

const asideData = "<div style='display:flex; align-items:center; justify-content:center; flex-wrap:wrap'>" +

    "<div style='height:200px; width:200px; border:2px solid lime; display:flex; align-items:center; justify-content:flex-start; flex-direction:column'>" +
    "<p>About</p>" +
    "<p>Mission</p>" +
    "<p>Pruthviraj</p>" +
    "<p>Privacy</p>" +
    "<p>Copyright</p>" +
    "</div>" +

    "<div style='height:200px; width:200px; border:2px solid lime; display:flex; align-items:center; justify-content:flex-start; flex-direction:column'>" +
    "<p>Blog</p>" +
    "<p>News</p>" +
    "<p>Stories</p>" +
    "<p>Guides</p>" +
    "<p>Tips</p>" +
    "</div>" +

    "<div style='height:200px; width:200px; border:2px solid lime; display:flex; align-items:center; justify-content:flex-start; flex-direction:column'>" +
    "<p>Religion</p>" +
    "<p>Geography" +
    "<p>Gallery</p>" +
    "<p>Videos</p>" +
    "<p>More</p>" +
    "</div>" +

    "<div style='height:200px; width:200px; border:2px solid lime; display:flex; align-items:center; justify-content:flex-start; flex-direction:column'>" +
    "<p>Kooapp</p>" +
    "<p>Facebook</p>" +
    "<p>Twitter</p>" +
    "<p>Instagram</p>" +
    "<p>LinkedIn</p>" +
    "</div>" +

    "</div>";
aside.addData(asideData)
// =========== footer component =====

export const currentYear = new Date().getFullYear();

export const footer = new cppitlab;
footer.createElement("footer");
footer.addAttribute("class", "footer");
footer.addStyle(style.footerStyle);
footer.mount("body");
footer.addData("<h3>&copy; cppitlab. " + currentYear + " </h3>")

// =================================
export { cppitlab, style };