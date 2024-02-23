import Img from "../../images/images";
import FashionItem from "../FashionItem/FashionItem";
import "./Fashion.css"

const Fashion = () => {
    return (
        <div className='Fashion'>
            <h2>
                Fashion Is Not Necessarily About Labels. It's Not About Brands." It's About Something Else That Comes From Within You."<br />
                Ralph Lauren
            </h2>
            <div className="FashionItems">
                <FashionItem 
                    title={"Standard-fit sleeveless midi dress"} 
                    desc={"You have to stay true to your heritage; that's what your brand is about."}
                    image={Img.FashionImg1}
                    AnimDelay={0}
                />
                <FashionItem 
                    title={"Casual Indigo Blue Jeans Jacket"} 
                    desc={"Tops shift shape rich fabric relaxed fitting size true black gold zip virgin wool."}
                    image={Img.FashionImg2}
                    AnimDelay={0.1}
                />
                <FashionItem 
                    title={"Montes Loremous A Cosmopolite"} 
                    desc={"Statement sophistication jersey tweed midi flattering comfortable details yellow."}
                    image={Img.FashionImg3}
                    AnimDelay={0.2}
                />
                <FashionItem 
                    title={"Women’s long sleeve red Jacket"} 
                    desc={"Best seller signature waist cut pockets cotton-mix red tailoring elegant cashmere."}
                    image={Img.FashionImg4}
                    AnimDelay={0.3}
                />
            </div>
             
        </div>
    );
}

export default Fashion;
