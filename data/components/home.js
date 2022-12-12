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
title.addAttribute("title", "C++ It Lab");
title.addData("C++ It Lab");
title.mount("header")

export const menu = new cppitlab;
menu.createElement("div");
menu.addAttribute("class","menu");
menu.addStyle(style.menuStyle);
menu.mount("header");
menu.addData("<hr /> <hr /> <hr />")


export { cppitlab, style };