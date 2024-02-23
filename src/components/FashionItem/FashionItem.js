import './FashionItem.css'
import {motion} from 'framer-motion'

const FashionItem = ({title, desc, image,  AnimDelay}) => {
    return (
        <motion.div className='FashionItem'
            viewport={{
                once:true,
                amount:0.5
            }}
            initial = {{
                opacity:0,
                y:-100,
            }}
            whileInView ={{
                opacity:1,
                y:0,
                transition:{
                    type:'spring',
                    bounce:0.4,
                    duration:1.5,
                    delay:AnimDelay
                }
            }}
        >
                <h4>{title}</h4>
                <p>{desc}</p>
                <img src={image} alt="" />
        </motion.div>
    );
}

export default FashionItem;
