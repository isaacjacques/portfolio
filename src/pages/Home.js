import aStarThumbnail from './../img/aStarProjectThumbnail.png';
import asciiArtGeneratorThumbnail from './../img/asciiArtGeneratorThumbnail.jpg';
import ecomSiteThumbnail from './../img/ecomSiteThumbnail.jpg';
import elementThumbnail from './../img/elementThumbnail.png';
import csharpGenericThumbnail from './../img/csharpGenericThumbnail.png';
import flightTrackerThumbnail from './../img/flightTrackerThumbnail.jpg';
import Badge from './../Badge.js';
import ProjectTile from './../ProjectTile.js';
import TileThumbnail from './../TileThumbnail.js';
import raw from './../AsciiArt.txt';

const Home = () => {
    fetch(raw)
    .then(t => t.text()).then(asciiArt => {
        console.log('%s\n\nIf you\'re curious about how this site works, the source code is available on my github:\nhttps://github.com/isaacjacques/portfolio', asciiArt)
    })

    return (
        <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
        <section id="about">
            <h2 className="text-4xl font-bold leading-snug text-isabelline-100">About</h2>
            <div className="text-lg text-paledogwood-300">
                <p className="mb-8">
                As a skilled software developer hailing from 
                Florida, I bring a multitude of valuable 
                attributes to the table. At the age of 24, my 
                passion for engineering in all its forms has 
                been a constant driving force in my life, and 
                I am incredibly grateful to have discovered 
                the world of software development. While I 
                am largely self-taught and consider myself 
                an autodidact, I have also gained 
                substantial professional experience in 
                backend and app development, as well as 
                real-time programming. 
                Additionally, I'll be completing my associates degree in the winter of 2024.
                    <a className="hover:text-rosequartz-400 italic" href="mailto:jacques.development@outlook.com" target="_blank" rel="noreferrer"> My full resume and references available by request.</a>
                </p>
            </div>
        </section>
            <section id="projects">
                <h2 className="pb-4 text-4xl font-bold leading-snug text-isabelline-100">Projects</h2>
                <ul>
                    <li>
                        <ProjectTile 
                            title={"Flight Tracker"} 
                            description={"A react app using Leaflet to visualize publicly available flight data provided by OpenSky REST API" } 
                            href={"/projects/flightmapdemo"} 
                            src={flightTrackerThumbnail} 
                            alt={"Flight Tracker"}
                            badges={ 
                                <div className="flex flex-row">
                                    <Badge text={"React"}/>
                                    <Badge text={"JS"}/>
                                    <Badge text={"HTML"}/>
                                </div> 
                            }
                        />
                    </li>
                    <li>
                        <ProjectTile 
                            title={"E-commerce Site API and Database"} 
                            description={"An API and Database designed for an online shop with basic CRUD operations and authentication/authorization." } 
                            href={"https://github.com/isaacjacques/EcomSite"} 
                            src={ecomSiteThumbnail} 
                            alt={"E-commerce Site API and Database"}
                            badges={ 
                                <div className="flex flex-row">
                                    <Badge text={"MS SQL"}/>
                                    <Badge text={"C#"}/>
                                </div> 
                            }
                        />
                    </li>
                    <li>
                        <ProjectTile 
                            title={"TCP Server"} 
                            description={"A mulithreaded TCP Server in .NET 6.0." } 
                            href={"https://github.com/isaacjacques/TcpMessager"} 
                            src={csharpGenericThumbnail} 
                            alt={"C# TCP Server"}
                            badges={ 
                                <div className="flex flex-row">
                                    <Badge text={"C#"}/>
                                </div> 
                            }
                        />
                    </li>
                    <li>
                        <ProjectTile 
                            title={"Ascii Art Generator"} 
                            description={"A python tool that converts image files into ascii art." } 
                            href={"https://github.com/isaacjacques/AsciiArtGenerator"} 
                            src={asciiArtGeneratorThumbnail} 
                            alt={"Ascii Art Generator"}
                            badges={ 
                                <div className="flex flex-row">
                                    <Badge text={"Python"}/>
                                </div> 
                            }
                        />
                    </li>
                    <li>
                        <ProjectTile 
                            title={"A* Search Algorithm"} 
                            description={"A visualizer for the A* Search Algorithm that allows users to create obstacles to avoid." } 
                            href={"/projects/astardemo"} 
                            src={aStarThumbnail} 
                            alt={"A* Search Algorithm"}
                            badges={ 
                                <div className="flex flex-row">
                                    <Badge text={"React"}/>
                                    <Badge text={"JS"}/>
                                    <Badge text={"HTML"}/>
                                </div> 
                            }
                        />
                    </li>
                </ul>
            </section>
            <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="z-10 sm:col-span-6">
                    <h2 className="pb-4 text-4xl font-bold leading-snug text-isabelline-100">Experience</h2>
                    <ul>
                        <li>
                            <div className="pb-4 grid grid-cols-6 gap-4">
                                <TileThumbnail src={elementThumbnail} alt={"SDI Element Logic"}/>
                                <div className="col-span-4">
                                    <a href={"https://www.elementlogic.net/"} target="_blank" rel="noreferrer">
                                        <h2 className="pb-4 text-2xl font-bold leading-snug text-isabelline-100 hover:text-rosequartz-400">{ "SDI Element Logic (2019-2020) - QA Intern" }</h2>
                                    </a>
                                    <p className="pb-4 text-lg text-paledogwood-300">
                                        <ul class="list-disc pl-8">
                                            <li>In this role I was responsible for diagnosing and resolving issues in applications</li>
                                            <li>Often I would need to fix issues MS SQL procedures or optimize queries</li>
                                            <li>At this time I also patched .NET applications in C# and VisualBasic</li>
                                        </ul>
                                    </p>
                                    <div className="flex flex-wrap">
                                        <div className="flex flex-row">
                                            <Badge text={"MS SQL"}/>
                                            <Badge text={"C#"}/>
                                            <Badge text={"VB"}/>
                                            <Badge text={".NET Framework"}/>
                                            <Badge text={".NET Core"}/>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="pb-4 grid grid-cols-6 gap-4">
                                <TileThumbnail src={elementThumbnail} alt={"SDI Element Logic"}/>
                                <div className="col-span-4">
                                    <a href={"https://www.elementlogic.net/"} target="_blank" rel="noreferrer">
                                        <h2 className="pb-4 text-2xl font-bold leading-snug text-isabelline-100 hover:text-rosequartz-400">{ "SDI Element Logic (2020-2023) - Software Developer" }</h2>
                                    </a>
                                    <p className="pb-4 text-lg text-paledogwood-300">
                                        <ul class="list-disc pl-8">
                                            <li>In this position I learned a lot about supply chains and material handling</li>
                                            <li>I was responsible for designing and developing custom solutions for automating retail and ecom distribution</li>
                                            <li>I designed and optimized MS SQL server databases</li>
                                            <li>Maintained and developed C# applications on .NET</li>
                                            <li>Designed and implemented features in TwinCat for our PLC application</li>
                                            <li>Commissioned systems on site resolving hardware, software and networking issues</li>
                                            <li>Configured and installed fault tolerant servers</li>
                                            <li>Configured Cisco and Netgate appliances</li>
                                            <li>Worked with clients to configure business to business VPN’s</li>
                                        </ul>
                                    </p>
                                    <div className="flex flex-wrap">
                                        <Badge text={"MS SQL"}/>
                                        <Badge text={"C#"}/>
                                        <Badge text={".NET Framework"}/>
                                        <Badge text={".NET Core"}/>
                                        <Badge text={"Networking/IT"}/>
                                        <Badge text={"Twincat"}/>
                                        <Badge text={"IEC 61131-3"}/>
                                    </div> 
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        
  );
}; //ProjectTile = ({ title }, { description }, { href }, { img }, { badges })
export default Home;


