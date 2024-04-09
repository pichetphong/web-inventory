import * as React from "react";
import "./App.css";
import WebHeader from "./components/WebHeader"
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

function App() {

    return (
        <>
            <header>
                <WebHeader/>
            </header>
            <section id="section" className="grid-container">
                <aside id="aside" className="">
                    <SideContent/>
                </aside>
                <main id="main" className="grid-main">
                    <MainContent />
                </main>
            </section>
        </>
    );
}

export default App;
