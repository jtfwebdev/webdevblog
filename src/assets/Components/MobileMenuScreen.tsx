import { motion } from 'framer-motion';

const MobileMenuScreen = () => {

    const navScreenVars = {
        initial: {
            opacity: 0
        },
        open: {
            opacity: 1,
            transition: {
                duration: .2
            }
        },
        exit: {
            opacity: 0,
            transition: {
                duration: .2
            }
        }
    }

    const navLinkContainerVars = {
        initial: {
            transition: {
                staggerChildren: 0.2
            }
        },
        open: {
            transition: {
                staggerChildren: 0.13
            }
        }
    }

    const navLinkVars = {
        initial: {
            x: "-50vw"
        },
        open: {
            x: 0,
            transition: {
                type: "spring", 
                stiffness: 60
            }
        }
    }

    return ( 
        <motion.div
        className="h-screen z-40 w-full bg-white bg-opacity-[.95] backdrop-blur fixed top-0 font-bold text-4xl font-[ubuntu]"
        variants={navScreenVars}
        initial="initial"
        animate="open"
        exit="exit"
        >
            <motion.div variants={navLinkContainerVars} className="gap-8 pl-8 text-[#E88D67] flex h-full justify-center w-fit align-center flex-col">
                <motion.a variants={navLinkVars} className="mb-16" href="/">
                    Home
                </motion.a>
                <motion.h2 variants={navLinkVars}>
                    Contact me
                </motion.h2>
                <div className="flex font-normal gap-8 ml-8 flex-col align-center font-[poppins] justify-around text-2xl">
                    <motion.a variants={navLinkVars} href="mailto:jtfwebdevconsultant@hotmail.com" target="_blank">
                        Email
                    </motion.a>
                    <motion.a variants={navLinkVars} href="https://github.com/jtfwebdev" target="_blank">
                        Github
                    </motion.a>
                    <motion.a variants={navLinkVars} href="https://jtfwebdev.co.uk" target="_blank">
                        Portfolio
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
     );
}
 
export default MobileMenuScreen;