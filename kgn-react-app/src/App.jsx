import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <div className="my-app">
            <header>
                <Header />
            </header>

            <main className="main-app">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>

        </div>
    );
}