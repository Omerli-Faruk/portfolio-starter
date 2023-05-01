import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import about from '../assets/about.svg';

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    })
    return <section className='section min-h-[85vh] lg:min-h-[670px]' id='about' ref={ref}>
        <div className="container mx-auto">
            <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 mb-12'>
                { /* img */}
                <motion.div
                    variants={fadeIn('right', 0.3)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{amount: 0.3, once: true}}
                    className='flex-1 h-[640px] hidden lg:flex'>
                    <img src={about} alt='' className='bg-about bg-contain bg-no-repeat bg-top opacity-50'/>
                </motion.div>
                { /* text */}
                <motion.div
                    className='flex-1'
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    whileInView={'show'}
                    viewport={{amount: 0.3, once: true}}>
                    <h2 className='text-accent font-secondary font-semibold text-5xl'>Hakkımda.</h2>
                    <h3 className='font-secondary font-semibold text-3xl mb-2'>Merhaba, ben kendimi yaklaşık 9 aydır yazılım knousunda geliştiriyorum.</h3>
                    <p className='mb-6'>
                        Son 9 ayda Java, HTML, CSS, JavaScript, PHP, SQL ve C# gibi birçok programlama dili ve web teknolojisi öğrendim. <br/>
                        Özellikle web geliştirme konusunda kendimi geliştirmek için çalıştım.<br/>
                        Projeler oluşturarak pratik yaptım ve online kaynaklar ve diğer geliştiricilerden yardım aldım.<br/>
                        Bu deneyimlerim beni daha özgüvenli bir geliştirici haline getirdi ve gelecekte daha fazla projede yer alabilme imkanı sağladı.<br/>
                    </p>
                    { /* stats */}
                    <div className='flex gap-x-6 lg:gap-x-10 mb-10'>
                        <div>
                            <div className='text-[40px] font-secondary font-semibold text-accent flex justify-center'>
                                {inView ? <CountUp start={0} end={16} duration={3.8}/> :
                                    null}
                            </div>
                            <div className='text-sm font-semibold tracking-[2px] uppercase'>Yaşındayım
                            </div>
                        </div>
                        <div>
                            <div className='text-[40px] font-secondary font-semibold text-accent flex justify-center'>
                                {inView ? <CountUp start={0} end={9} duration={4}/> :
                                    null}
                            </div>
                            <div className='font-semibold text-sm tracking-[2px] uppercase'><span className='flex  justify-center'>Aylık</span>
                                tecrübem var
                            </div>
                        </div>
                        <div>
                            <div className='text-[40px] font-secondary font-semibold text-accent flex justify-center'>
                                {inView ? <CountUp start={0} end={7} duration={4.5}/> :
                                    null}
                            </div>
                            <div className='font-semibold text-sm tracking-[2px]'><span
                                className='flex justify-center uppercase'>Benim</span>
                                PROJELERİM
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-x-8 items-center'>
                        <button className='btn btn-lg '>İletişime Geç</button>
                        <a href='#' className='text-xl font-secondary btn-link portf font-medium '>Portföyüm</a>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>;
};

export default About;
