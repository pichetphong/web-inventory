import * as React from "react";
import "./App.css";
import WebHeader from "./components/WebHeader"
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";

function App() {

    return (
        <>
            <section className="grid-container">
                <aside>
                    <SideContent/>
                </aside>
                <main className="grid-main">
                    <header className="header-grid-col">
                        <WebHeader/>
                    </header>
                    <MainContent />
                </main>
            </section>
        </>
    );
}

export default App;
