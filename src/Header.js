import { GiAmplitude } from 'react-icons/gi'

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-3/8 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a className="flex flex-row text-paledogwood-300 hover:text-rosequartz-400" href="/" target="_blank" rel="noreferrer">
          <GiAmplitude size="46" className="pt-1 pr-1"/>
          <h1 className="font-bold whitespace-nowrap text-5xl text-isabelline-100 hover:text-rosequartz-400">
            Isaac Jacques
          </h1>
        </a>
        <h2 className="font-medium text-2xl text-paledogwood-300">Sofware Developer</h2>
        <div className="text-lg text-isabelline-100"> 
          <p className="mb-8">
            "I build things."
          </p>
        </div>
      </div>
    </header>
  );
};
  
export default Header;