import { AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'
import { SiLeetcode } from 'react-icons/si'
import { BsCodeSlash } from 'react-icons/bs'
import FooterIcon from './FooterIcon.js'

const Footer = () => {
  return (
    <footer className=" text-paledogwood-300 border-t border-solid border-rosequartz-400 p-2">
      <div className="grid grid-flow-col">
        <ul className="justify-self-left">
            <li className="inline-block">
              <FooterIcon icon={<BsCodeSlash size="33"/>} href="https://github.com/isaacjacques/portfolio" />
            </li>
            <li className="inline-block">
              <FooterIcon icon={<AiOutlineGithub size="33"/>} href="https://github.com/isaacjacques"/>
            </li>
            <li className="inline-block">
              <FooterIcon icon={<SiLeetcode size="33"/>} href="https://leetcode.com/isaacjacques"/>
            </li>
            <li className="inline-block">
              <FooterIcon icon={<AiOutlineLinkedin size="33"/>} href="https://linkedin.com/isaacjacques"/>
            </li>
            <li className="inline-block">
              <FooterIcon icon={<MdOutlineMail size="33"/>} href="mailto:jacques.development@outlook.com" />
            </li>
        </ul>
        <div className="text-lg text-paledogwood-300 italic whitespace-nowrap justify-self-end">
          © 2023 MadeByJacques
        </div>
      </div>
    </footer>
  );
};

export default Footer;