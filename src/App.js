import Header from "./Header";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex flex-col justify-between bg-spacecadet min-h-screen max-w-screen-xl px-6 py-12 font-sans">
      <Header />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
