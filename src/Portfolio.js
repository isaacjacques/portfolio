const Portfolio = () => {
    return (
        <main className="pt-24 lg:w-1/2 lg:py-24">
            <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h2 className="font-bold leading-snug text-isabelline">About</h2>
            </section>
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="z-10 sm:col-span-6">
                <h2 className="font-bold leading-snug text-isabelline">Experience</h2>
                <h3 className="font-medium leading-snug text-pale-dogwood">Software Developer at SDI Element Logic</h3>
            </div>
            </section>
            <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <h2 className="font-bold leading-snug text-isabelline">Projects</h2>
            </section>
        </main>
  );
};
export default Portfolio;