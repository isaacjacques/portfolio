import { Outlet, Link } from "react-router-dom";
import Header from "./../Header";
import Footer from "./../Footer";

const Layout = () => {
    return (

        <div className="bg-gradient-to-b from-spacecadet-800 to-spacecadet-900 leading-relaxed antialiased">
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 lg:px-24 lg:py-0 font-sans">
                <div className="lg:flex justify-between">
                    <Header />
                    <main className="lg:w-5/8 lg:py-24 lg:pl-24">
                        <Outlet />
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    )
};

export default Layout;