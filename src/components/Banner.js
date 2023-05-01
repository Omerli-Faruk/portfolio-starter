import React from 'react';
import avatar from '../assets/avatar.svg';
import {FaGithub, FaYoutube, FaTwitter} from "react-icons/fa";
import {TypeAnimation} from "react-type-animation"
import {motion} from "framer-motion"
import {fadeIn} from "../variants"

const Banner = () => {
    return (
        <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                    { /* text */}
                    <div className='flex-1 text-center font-secondary lg:text-left'>
                        <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'}
                                   viewport={{once: true, amount: 0.7}}
                                   className='text-[55px] font-bold leading-[0.7] lg:text-[110px]'>
                            Ömer <span>Faruk</span>
                        </motion.h1>
                        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'}
                                    viewport={{once: true, amount: 0.7}}
                                    className='my-4 text-[36px] lg:text-[60px] uppercase leading-[1] text-bg inline-block'>
                            <span className='text-white mr-4 font-bold'>I am a</span>
                            <TypeAnimation sequence={[
                                'Front End',
                                2000,
                                'An Android',
                                2000,
                                'C#',
                                2000,
                                'Developer',
                                2000,
                            ]} speed={50} className='text-gradient' wrapper='span' repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'}
                                  viewport={{once: true, amount: 0.7}}
                                  className='max-w-lg mb-8 mx-auto lg:mx-0'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut distinctio dolorem
                            fuga placeat quibusdam sapiente ullam voluptatum!
                        </motion.p>
                        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'}
                                    viewport={{once: true, amount: 0.7}}
                                    className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                            <button className='btn btn-lg'>İletişime Geç</button>
                            <a href='#' className='text-xl font-secondary btn-link portf font-medium'>Portföyüm</a>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'}
                                    className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
                                    viewport={{once: true, amount: 0.7}}>
                            <a href='https://www.youtube.com/channel/UCoqvrXNpMhNQzamFgOFDg6w' target='_blank'>
                                <FaYoutube/>
                            </a>
                            <a href='https://github.com/Omerli-Faruk' target='_blank'>
                                <FaGithub/>
                            </a>
                            <a href='https://twitter.com/OmerliFaruk35' target='_blank'>
                                <FaTwitter/>
                            </a>
                        </motion.div>
                    </div>
                    { /* image */}
                    <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'}
                                className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'
                                viewport={{once: true, amount: 0.7}}>
                        <img src={avatar} alt='avatar' className='opacity-50'/>
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Banner;
