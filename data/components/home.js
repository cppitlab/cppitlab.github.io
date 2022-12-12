import { cppitlab } from "../../media/js/main.js";
import { style } from "../styleData/homePage.js";

export const header = new cppitlab;
header.createElement("header");
header.addStyle(style.headerStyle);
header.mount("body");




export { cppitlab, style };