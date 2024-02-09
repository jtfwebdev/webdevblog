import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return (
        <div className="w-[15%] h-16 fixed right-0 top-0 z-10 flex items-center justify-around">
            <FontAwesomeIcon icon={faEnvelope} size="xl" className="text-[#25283D] hover:text-[#E88D67] duration-200 cursor-pointer" />
            <FontAwesomeIcon icon={faSquareGithub} size="xl" className="text-[#25283D] hover:text-[#E88D67] duration-200 cursor-pointer" />
            <FontAwesomeIcon icon={faBriefcase} size="xl" className="text-[#25283D] hover:text-[#E88D67] duration-200 cursor-pointer" />
        </div>
     );
}
 
export default Header;