import React from "react";
/** Styles */
import HomeStyles from "./Home.styles";
import useViews from "views";
import useControllers from "controllers";
import _ from "lodash";

const Home: React.FC = (): JSX.Element => {
    /** Views */
    const { useComponents } = useViews();
    const { CardProduct } = useComponents();

    /** Controllers */
    const {useScreenHooks} = useControllers();
    const {useHome} = useScreenHooks();
    const {products, getProducts, getMinValue, setToCart} = useHome();

    React.useEffect(() => {
        getProducts();
    }, [])

    return (
        <HomeStyles.Container>
            <div className="flex gap-[20px] mt-[30px]">
                {
                    _.map(products, (item: any, index: number) => (
                        <CardProduct {...item} getMinValue={getMinValue} onClick={() => setToCart(item, 1)} key={index}/>
                    ))
                }
            </div>
        </HomeStyles.Container>
    );
}

export default Home;