let style = {
    headerStyle: {
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "linear-gradient(-45deg,blue,crimson)",
    },
    titleStyle: {
        marginLeft: "10px",
    },
    menuStyle: {
        marginRight: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    navStyle: {
        minHeight: "100vh",
        width: "0%",
        overflowX: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        top: 0,
        left: 0,
        position: "absolute",
        backgroundColor: "black",
        zIndex: "100",
        transitionDuration: "0.2s",
    },
    mainStyle: {
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
    },
    articleStyle: {},
    sectionStyle: {},
    asideStyle: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
    },
    footerStyle: {
        height: "50px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(-45deg,blue,crimson)",
        color: "white",
    },
};

export { style };