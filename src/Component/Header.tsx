import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";

interface RootState {
    // Add typings for your reducer states here
    // For example:
    cartData: any[]; // Adjust the type according to your actual state structure
    // Add more properties if you have other reducers
}


const Header: React.FC = () => {
    const result= useSelector((state:RootState) =>state.cartData);
    console.warn("data in header", result);
     
    return (
        <>
        {/* header  */}
        <div className="h-[100px] bg-[#92a8d1]">     {/* header  */}


            <div className=" relative float-right m-10 "> {/* cartdiv */}

                <span className="bg-red-600 rounded-full h-6 w-6 absolute -top-5 left-3 text-white text-center"> {result.length}</span>
                               
                    <FaShoppingCart className="w-[20px] h-[20px]"/>


            </div> 
            {/* cartdiv */}
        </div>         {/* header  */}

        </>
    )
}

export default Header;