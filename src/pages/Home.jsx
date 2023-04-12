import {useEffect, useState} from "react";
import {motion} from "framer-motion";
// Pages
import About from "../components/About";
import {Link} from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

const firstName = {
    initial: {
        y: 0,
        opacity: 1
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
            transition: {delay: 1.2, ...transition},
            opacity: {
                delay: 0.8,
            },
        },
    },
};

const lastName = {
    initial: {
        y: 0,
        opacity: 1
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
            opacity: {
                delay: 0.8,
            },
        },
    },
};

const letter = {
    initial: {
        top: 400,
    },
    animate: {
        top: 0,
        transition: {
            duration: 1, ...transition
        },

    },
};

function Home({imageSize}) {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='mt-60 grid grid-cols-1 flex justify-center'>
                <center>
                    <motion.div className='flex items-center justify-center'
                                initial='initial'
                                animate='animate'
                                exit='exit'>
                        <div className='flex items-center justify-center'>
                            {/*    <motion.div className='row row-cols-2 text-center'*/}
                            {/*                style={{width: 700}}*/}
                            {/*                initial={{opacity: 1}}>*/}
                            {/*        <div className='col p-0 text-start'>*/}
                            {/*            Web Developer*/}
                            {/*        </div>*/}
                            {/*        <motion.div className='col p-0 text-end'*/}
                            {/*                    initial={{opacity: 1}}>*/}
                            {/*            Student*/}
                            {/*        </motion.div>*/}
                            {/*    </motion.div>*/}
                        </div>
                        <motion.div className='mb-10'>
                            <motion.span variants={firstName}>
                                <motion.span className='text-9xl' variants={letter}>S</motion.span>
                                <motion.span className='text-9xl' variants={letter}>a</motion.span>
                                <motion.span className='text-9xl' variants={letter}>m</motion.span>
                                <motion.span className='text-9xl' variants={letter}>u</motion.span>
                                <motion.span className='text-9xl' variants={letter}>e</motion.span>
                                <motion.span className='text-9xl' variants={letter}>l</motion.span>
                            </motion.span>
                            <motion.span className='text-9xl'>&nbsp;&nbsp;</motion.span>
                            <motion.span variants={lastName}>
                                <motion.span className='text-9xl' variants={letter}>C</motion.span>
                                <motion.span className='text-9xl' variants={letter}>a</motion.span>
                                <motion.span className='text-9xl' variants={letter}>t</motion.span>
                                <motion.span className='text-9xl' variants={letter}>a</motion.span>
                                <motion.span className='text-9xl' variants={letter}>n</motion.span>
                                <motion.span className='text-9xl' variants={letter}>i</motion.span>
                                <motion.span className='text-9xl' variants={letter}>a</motion.span>
                            </motion.span>
                        </motion.div>
                    </motion.div>
                    <motion.div className='flex rounded-lg w-screen overflow-hidden'
                                style={{
                                    height: windowSize[1] - 200
                                }}
                                initial={{
                                    width: imageSize.width,
                                    height: imageSize.height,
                                    y: '-64%',
                                }}
                                animate={{
                                    y: 0,
                                    height: windowSize[1] - 200,
                                    width: windowSize[0],
                                    transition: {delay: 0.4, ...transition}
                                }}>
                        <motion.img className='flex object-cover w-full items-center justify-center'
                                    src={require('../images/splash_image3.webp')}
                                    alt='Samuel Catania'
                                    initial={{scale: 1.1}}
                                    animate={{
                                        transition: {delay: 0, ...transition}
                                    }}/>
                    </motion.div>
                </center>
            </div>
        </div>
    )
}

export default Home;
