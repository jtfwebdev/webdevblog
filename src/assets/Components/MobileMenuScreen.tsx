import { motion } from 'framer-motion';

const MobileMenuScreen = () => {
    return ( 
        <motion.div
        className="h-screen z-40 w-full backdrop-blur-3xl fixed top-0 font-bold text-4xl font-[ubuntu]"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .5}}
        exit={{opacity: 0}}
        >
            <div className="gap-8 pl-8 text-[#E88D67] flex h-full justify-center w-fit align-center flex-col">
                <motion.a className="mb-16" href="/">
                    Home
                </motion.a>
                <motion.a href="/">
                    Contact me
                </motion.a>
                <div className="flex font-normal gap-8 ml-8 flex-col align-center font-[poppins] justify-around text-2xl">
                    <motion.a href="/">
                        Email
                    </motion.a>
                    <motion.a href="/">
                        Github
                    </motion.a>
                    <motion.a href="/">
                        Portfolio
                    </motion.a>
                </div>
            </div>
        </motion.div>
     );
}
 
export default MobileMenuScreen;