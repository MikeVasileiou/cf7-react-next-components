import * as React from "react";
import Header from "./Header.tsx";
import Footer from "./Footer";

// import CodingFactoryLogo from "./CodingFactoryLogo.tsx";


interface LayoutProps {

    children: React.ReactNode;
}



const Layout = ({children}:LayoutProps) => {
    return (

        <>
            {/*<CodingFactoryLogo/>*/}
            <Header/>
            <div className="container mx-auto min-h-[100vh] pt-24"></div>
            {children}
            <Footer/>
        </>


    )
}
export default  Layout;