import Img from '../../images/images';
import './SpecialProducts.css'
import { motion } from 'framer-motion'

const SpecialProducts = () => {
    return (
        <>
            <div className="SpecialProductsHeading">
                <h2>SPECIAL PRODUCTS</h2>
                <span className='Devider'></span>
                <p>Structured chic panels power party flattering ultimate trim back pencil silhouette perfect look.</p>
            </div>
            <div className='SpecialProducts'>
                <div className="firstSection">
                    <motion.div className="FirstImg"
                        viewport={{
                            once: true,
                            amount: 0.5
                        }}
                        initial={{
                            opacity: 0,
                            x: -100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: 'spring',
                                bounce: 0.4,
                                duration: 1.5,
                                delay: 0
                            }
                        }}
                    >
                        <img src={Img.specialProduct1} alt="" />
                    </motion.div>
                    <div className="rowImages">
                        <motion.div
                            viewport={{
                                once: true,
                                amount: 0.5
                            }}
                            initial={{
                                opacity: 0,
                                x: -100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: 'spring',
                                    bounce: 0.4,
                                    duration: 1.8,
                                    delay: 0.5
                                }
                            }}
                        >
                            <img src={Img.specialProduct2} alt="" />
                        </motion.div>
                        <motion.div
                            viewport={{
                                once: true,
                                amount: 0.5
                            }}
                            initial={{
                                opacity: 0,
                                x: -100,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                transition: {
                                    type: 'spring',
                                    bounce: 0.4,
                                    duration: 1.5,
                                    delay: 0.3
                                }
                            }}
                        ><img src={Img.specialProduct3} alt="" />
                        </motion.div>
                    </div>
                </div>
                <motion.div className="secondSection"
                    viewport={{
                        once: true,
                        amount: 0.5
                    }}
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}
                    whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                            type: 'spring',
                            bounce: 0.4,
                            duration: 1.5,
                            delay: 0
                        }
                    }}
                >
                    <img src={Img.specialProduct4} alt="" />
                </motion.div>
                <div className="thirdSection">
                    <motion.div
                        viewport={{
                            once: true,
                            amount: 0.5
                        }}
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: 'spring',
                                bounce: 0.4,
                                duration: 1.5,
                                delay: 0
                            }
                        }}
                    >
                        <img src={Img.specialProduct5} alt="" />
                    </motion.div>
                    <motion.div
                        viewport={{
                            once:true,
                            amount: 0.5
                        }}
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: 'spring',
                                bounce: 0.4,
                                duration: 1.8,
                                delay: 0.5
                            }
                        }}
                    >
                        <img src={Img.specialProduct6} alt="" />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default SpecialProducts;
