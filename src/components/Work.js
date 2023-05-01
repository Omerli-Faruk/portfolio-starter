import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Img2 from '../assets/a1.png';
import Img3 from '../assets/a2.png';
import Img1 from '../assets/a3.png';

const Work = () => {
    return (
        <section className='section min-h-[89vh] xl:min-h[700px] lg:min-h-[800px]' id='work'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row gap-x-10'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{amount: 0.3, once: true}}
                        className="flex-1 flex flex-col gap-y-10 mb-10 ">
                        <div className='flex flex-col xl:min-h-[320px] lg:min-h-[250px]'>
                            <h2 className='font-secondary text-3xl xl:text-5xl leading-tight font-semibold text-accent'>
                                Yaptığım Son Çalışmalar
                            </h2>
                            <p className='max-w-sm mb-0'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</p>
                        </div>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div
                                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                            </div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Front/Back end</span>
                            </div>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-3xl text-white'>Sign in/Sign up</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div

                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{amount: 0.3, once: true}}
                        className='flex-1 flex flex-col gap-y-10'>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div
                                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                            </div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Front End</span>
                            </div>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-3xl text-white'>Personal Website</span>
                            </div>
                        </div>
                        <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
                            <div
                                className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'>
                            </div>
                            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                                <span className='text-gradient'>Front End</span>
                            </div>
                            <div
                                className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                                <span className='text-3xl text-white'>Eti Clone</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Work;