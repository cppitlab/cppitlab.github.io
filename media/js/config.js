const nav = (command = 'open') => {
    document.querySelector(".nav").style.width = command == "open" ? "100%" : "0%";
}
