import { GiAbstract082 } from 'react-icons/gi'

const Header = () => {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div>
        <a className="flex flex-row text-paledogwood-300 hover:text-rosequartz-400" href="/" target="_blank" rel="noreferrer">
          <GiAbstract082 className="pt-2" size="45"/>
          <h1 className="font-bold text-5xl text-isabelline-100 hover:text-rosequartz-400">
            Isaac Jacques
          </h1>
        </a>
        <h2 className="font-medium text-2xl text-paledogwood-300">Sofware Developer</h2>
      </div>
    </header>
  );
};
  
export default Header;