import { cppitlab } from "../../media/js/main.js";
import { style } from "../styleData/homePage.js";

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
menu.addData("<hr /> <hr /> <hr />")

// ============= Navigation menu Related Data =============

export const nav = new cppitlab;
nav.createElement("nav");
nav.addStyle(style.navStyle);
nav.addAttribute("class", "nav");
nav.mount("body");

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

export { cppitlab, style };