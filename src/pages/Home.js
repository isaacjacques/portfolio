import aStarThumbnail from './../aStarProjectThumbnail.PNG';
import Badge from './../Badge.js';
import ProjectTile from './../ProjectTile.js';


const Home = () => {
    return (
        <div className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <section id="about">
                    <h2 className="text-4xl font-bold leading-snug text-isabelline-100">About</h2>
                    <div className="text-lg text-paledogwood-300">
                        <p className="mb-8">
                            As a skilled software developer hailing from Florida, I bring a multitude of valuable attributes to the table. 
                            At the age of 23, my passion for engineering in all its forms has been a constant driving force in my life, and I am incredibly grateful to have discovered the world of software development. 
                            While I am largely self-taught and consider myself an autodidact, I have also gained substantial professional experience in backend and app development, as well as real-time programming.       
                        </p>
                        <p className="mb-8">
                            My journey into the world of software development began with my involvement in warehouse automation, where I honed my skills and gained practical experience in delivering robust solutions. 
                            This professional background has equipped me with a strong foundation in understanding industry demands and executing projects efficiently.
                        </p>
                        <p className="mb-8">
                            In addition to my core expertise, I possess a solid grasp of networking principles, bolstered by my professional experience in this domain. 
                            This knowledge allows me to develop software solutions that seamlessly integrate with existing systems and leverage the power of efficient communication.
                        </p>
                        <p className="mb-8">
                            Beyond my professional pursuits, I am an avid PC gamer, constantly immersing myself in the latest technologies and trends. 
                            I enjoy DIY electronics projects, where I can explore the intersection of hardware and software development. 
                            I also find CTF security challenges to be an enjoyable avenue for acquiring new skills in a dynamic and engaging manner.
                        </p>
                        <p>
                            Overall, my combination of self-driven learning, professional experience, and diverse interests make me a well-rounded and enthusiastic software developer. 
                            I am confident that my dedication, technical prowess, and ability to adapt to dynamic challenges will make me a valuable asset to any software development team.
                        </p>
                    </div>
                </section>
                <section id="projects">
                    <h2 className="pb-4 text-4xl font-bold leading-snug text-isabelline-100">Projects</h2>
                    <ul>
                        <li>
                            <ProjectTile 
                                title={"A* Search Algorithm"} 
                                description={"In this project I created a visualizer for the A* Search Algorithm in mostly javascript. A main objective was to allow user interaction by creating obstacles for the algorithm to avoid as it attempts to find an efficient path between two points." } 
                                href={"/projects/astardemo"} 
                                src={aStarThumbnail} 
                                alt={"aStarThumbnail"}
                                badges={ 
                                    <div className="flex flex-row">
                                        <Badge text={"Javascript"}/>
                                        <Badge text={"HTML"}/>
                                    </div> 
                                }
                            />
                        </li>
                    </ul>
                </section>
                <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div className="z-10 sm:col-span-6">
                    <h2 className="text-4xl font-bold leading-snug text-isabelline-100">Experience</h2>
                    <h3 className="font-medium leading-snug text-paledogwood-300">Software Developer at SDI Element Logic</h3>
                </div>
            </section>
        </div>
        
  );
}; //ProjectTile = ({ title }, { description }, { href }, { img }, { badges })
export default Home;


