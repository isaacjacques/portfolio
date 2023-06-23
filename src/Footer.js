import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineCopyright } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'

/*
    <div className="inline-flex items-center">
      <FooterIcon icon={<AiOutlineCopyright size="22"/>} />
      <span>Jacques Development</span>
    </div>
*/
const Footer = () => {
  return (
    <footer className="w-screen text-pale-dogwood mt-6 border-t border-solid border-rose-quartz">
      <ul className="p-5 text-center">
          <li className="inline-block mt-1 mr-3">
            <a className="block hover:text-rose-quartz" href="https://github.com/isaacjacques" target="_blank" rel="noreferrer">
              <FooterIcon icon={<AiOutlineGithub size="33"/>} />
            </a>
          </li>
          <li className="inline-block mt-1 mr-3">
            <a className="block hover:text-rose-quartz" href="https://linkedin.com/isaacjacques" target="_blank" rel="noreferrer">
              <FooterIcon icon={<AiOutlineLinkedin size="33"/>} />
            </a>
          </li>
          <li className="inline-block mt-1 mr-3">
            <a className="block hover:text-rose-quartz" href="mailto:jacques.development@outlook.com" target="_blank" rel="noreferrer">
              <FooterIcon icon={<MdOutlineMail size="33"/>} />
            </a>
          </li>
      </ul>
    </footer>
  );
};

const FooterIcon = ({ icon }) => (
  <div className="footer-icon">
    {icon}
  </div>
);


export default Footer;
