import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineCopyright } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'
import { SiLeetcode } from 'react-icons/si'
import ContactIcon from './ContactIcon.js'
/*
    <div className="inline-flex items-center">
      <FooterIcon icon={<AiOutlineCopyright size="22"/>} />
      <span>Jacques Development</span>
    </div>
*/
const Footer = () => {
  return (
    <footer className=" text-paledogwood-300 border-t border-solid border-rosequartz-400">
      <ul className="p-5 text-center">
          <li className="inline-block mt-1 mr-3">
            <a className="block hover:text-rosequartz-400" href="https://github.com/isaacjacques" target="_blank" rel="noreferrer">
              <ContactIcon icon={<AiOutlineGithub size="33"/>} />
            </a>
          </li>
          <li className="inline-block mt-1 mr-3">
            <a className="block hover:text-rosequartz-400" href="https://leetcode.com/isaacjacques" target="_blank" rel="noreferrer">
              <ContactIcon icon={<SiLeetcode size="33"/>} />
            </a>
          </li>
          <li className="inline-block mt-1 mr-3">
            <a className="block hover:text-rosequartz-400" href="https://linkedin.com/isaacjacques" target="_blank" rel="noreferrer">
              <ContactIcon icon={<AiOutlineLinkedin size="33"/>} />
            </a>
          </li>
          <li className="inline-block mt-1 mr-3">
            <a className="block hover:text-rosequartz-400" href="mailto:jacques.development@outlook.com" target="_blank" rel="noreferrer">
              <ContactIcon icon={<MdOutlineMail size="33"/>} />
            </a>
          </li>
      </ul>
    </footer>
  );
};

export default Footer;