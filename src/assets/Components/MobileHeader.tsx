import { motion } from 'framer-motion';
import '../Styles/MobileHeader.css';

const MobileHeader = ({hamOpen, setHamOpen}) => {

    const burgerMenuVariants = {
        initial1: {

        },
        open1: {
            rotate: "45deg",
            y: "185%"
        },
        initial2: {
            opacity: 1,
            transition: {
                duration: 0.05
            }
        },
        open2: {
            opacity: 0,
            transition: {
                duration: 0.05
            }
        },
        initial3: {

        },
        open3: {
            rotate: "-45deg",
            y: "-185%"
        }
    }

    return ( 
        <div className="w-fit h-16 pr-4 fixed top-0 right-0 z-50 flex justify-end">
            <div className="hamburger z-40" onClick={() => setHamOpen(!hamOpen)}>
                <motion.div className={hamOpen ? "burger-bar clicked" : "burger-bar unclicked"} variants={burgerMenuVariants} initial="initial1" animate={hamOpen ? "open1" : "initial1"}></motion.div>
                <motion.div className={hamOpen ? "burger-bar clicked" : "burger-bar unclicked"} variants={burgerMenuVariants} initial="initial2" animate={hamOpen ? "open2" : "initial2"}></motion.div>
                <motion.div className={hamOpen ? "burger-bar clicked" : "burger-bar unclicked"} variants={burgerMenuVariants} initial="initial3" animate={hamOpen ? "open3" : "initial3"}></motion.div>
            </div>
        </div>
     );
}
 
export default MobileHeader;