import { Outlet, Link } from "react-router-dom";
import Header from "./../Header";
import ContactBar from "./../ContactBar";

const Layout = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-spacecadet-800 to-spacecadet-900 leading-relaxed antialiased">
                <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 font-sans">
                    <div className="lg:flex justify-between">
                        <Header />
                        <main className="pt-24 lg:w-1/2 lg:py-24">
                            <Outlet />
                        </main>
                    </div>
                    <ContactBar />
                </div>
            </div>
        </>
    )
};

export default Layout;