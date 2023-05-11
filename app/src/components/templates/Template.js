import React from "react"
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Body from "../organisms/Body";
const Template = (props) => {
    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column", alignContent: "center" }}>
            <div style={{ height: "50px" }}>
                <Header />
            </div>
            <div style={{height: "100%"}}>
                <Body />
            </div>
            <div style={{height: "100px"}}>
                <Footer />
            </div>
        </div>
    )
}; export default Template