import React from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from "../variants";


const Contact = () => {
    return (
        <section className='py-16 lg:section min-h-[85vh] xl:min-h[650px] lg:min-h-[620px]' id='contact'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    <motion.div
                        variants={fadeIn('right', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{amount: 0.3, once: true}}
                        className='flex-1 flex justify-center'>
                        <div>
                            <h3 className='text-[45px] lg:text-[75px] leading-none mb-12'>Haydi beraber<br/> çalışalım!
                            </h3>

                        </div>
                    </motion.div>
                    <motion.form
                        variants={fadeIn('left', 0.3)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{amount: 0.3, once: true}}
                        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start '>
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            type='text' placeholder='Adınız'/>
                        <input
                            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                            type='email' placeholder='E-Posta Adresiniz'/>
                        <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all
                        resize-none mb-12'
                        placeholder='Mesajınız'></textarea>
                        <button className='btn btn-lg'>Mesajı yolla</button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;