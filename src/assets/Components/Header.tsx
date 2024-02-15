import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className="w-full backdrop-blur-sm h-16 fixed right-0 top-0 z-10 flex items-center justify-between">
            <div className="ml-[2%] text-gray-400 font-bold justify-self-start width-fit text-nowrap"><a href="/">Josh Ford Web Development</a></div>
            <div className="mr-[2%] flex gap-8">
                <a href="mailto:jtfwebdevconsultant@hotmail.com" target="_blank"><FontAwesomeIcon icon={faEnvelope} size="xl" className="text-[#25283D] hover:text-[#E88D67] duration-200 cursor-pointer" /></a>
                <a href="https://github.com/jtfwebdev" target="_blank"><FontAwesomeIcon icon={faSquareGithub} size="xl" className="text-[#25283D] hover:text-[#E88D67] duration-200 cursor-pointer" /></a>
                <a href="https://jtfwebdev.co.uk" target="_blank"><FontAwesomeIcon icon={faBriefcase} size="xl" className="text-[#25283D] hover:text-[#E88D67] duration-200 cursor-pointer" /></a>
            </div>
        </div>
     );
}
 
export default Header;