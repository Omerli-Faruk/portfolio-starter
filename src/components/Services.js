import React from 'react';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const services = [
    {
        name: 'Front end',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos dolorem enimipsa ipsum laboriosam mollitia nihil odit officia praesentium quaerat',
    },
    {
        name: 'Android',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos dolorem enimipsa ipsum laboriosam mollitia nihil odit officia praesentium quaerat',
    },
    {
        name: 'C#',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos dolorem enimipsa ipsum laboriosam mollitia nihil odit officia praesentium quaerat',
    },
    {
        name: 'Development',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut dignissimos dolorem enimipsa ipsum laboriosam mollitia nihil odit officia praesentium quaerat',
    },
]
const Services = () => {
    return (
        <section className=' lg:section min-h-[96vh] xl:min-h[720px] lg:min-h-[620px]' id='services'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{amount: 0.3, once: true}}
                        className='flex-1 mb-12'>
                        <h2 className='text-6xl font-semibold font-secondary text-accent mb-2'>Ne Yapıyorum</h2>
                        <h3 className='text-4xl font-semibold font-secondary max-w-[455px] mb-8'>9 aydan fazla deneyime sahip bir Serbest Çalışan Front-end Developer'ım</h3>
                        <button className='btn btn-sm'>Çalışmalarımı Gör</button>
                    </motion.div>
                    <motion.div
                        variants={fadeIn('left', 0.5)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{amount: 0.3, once: true}}
                        className='flex-1'>
                        <div className=''>{services.map((service, index) => {
                            const {name, description, link} = service;
                            return (
                                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                                    <div className='max-w-[476px]'>
                                        <h4 className='text-[20px] tracking-wider font-secondary text-4xl font-semibold mb-2'>{name}</h4>
                                        <p className='font-secondary leading-tight'>{description}</p>
                                    </div>
                                </div>
                            );
                        })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
