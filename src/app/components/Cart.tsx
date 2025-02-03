import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CartContext } from "./context/CartContext";
import { TiDeleteOutline } from "react-icons/ti";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
    subsets: ['latin'],
    weight: '700'
})

const Cart = () => {
  const { showCart, setShowCart, cartItems , totalQuantity , totalPrice, toggleCartItemQty, onRemove }: any = useContext(CartContext);
  const handleClose = () => {
    setShowCart(!showCart);
  };

  return (
    <div className={`w-[100vw] bg-black bg-opacity-50 fixed right-0 top-0 z-10 ${urbanist.className}`}>
      <div className="  h-[100vh]  w-[600px] bg-white  float-right px-[40px] py-[50px] relative">
        <button
          onClick={handleClose}
          className="flex items-center text-[18px] font-[500] cursor-pointer gap-[2px] ml-[10px] border-none bg-[transparent]"
        >
          <AiOutlineLeft />
          <span className="ml-3">Your Cart</span>
          <span className="ml-3 text-[#f02d34]">{totalQuantity}</span>
        </button>
        <div className="mt-[15px] overflow-auto max-h-[70vh] px-[20px] py-[10px] ">
          {cartItems.map((product: any) => {
            return (
              <div className="flex gap-[15px] p-[20px]" key={product._id}>
                
                <div className={`flex flex-col gap-8  text-[#324d67] ${urbanist.className}`}>
                  <div className="flex flex-col gap-2">
                    <h5>{product.name}</h5>
                    <h4>${product.price}</h4>
                  </div>
                  <div className="flex gap-2">

                  <p className="px-3 py-3 w-[100px]   gap-4 flex border border-black items-center cursor-pointer ">
                    <span className="text-red-700">
                      <AiOutlineMinus onClick={()=>toggleCartItemQty(product._id , 'minus')} />
                    </span>
                    <span className="text-[20px]">{product.quantity}</span>
                    <span className="text-green-800" onClick={()=>toggleCartItemQty(product._id , 'plus')}>
                      <AiOutlinePlus  />
                      
                    </span>
                  </p>
                  <button type="button" className="text-red-900 text-[25px]" onClick={()=> onRemove(product)} >
                    <TiDeleteOutline  />
                  </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-[5px] right-[5px] w-[100%] pt-[5px] pb-[3px] pr-[85px] pl-[85px]  ">
          {
            cartItems.length > 0 && 
            <>
            <div className={`flex w-full justify-between py-3 ${urbanist.className}`}>
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className={`text-center   text-black   font-bold w-full   border-4 border-black rounded-md ${urbanist.className}`}>
                <button className="h-[35px] hover:text-white  hover:font-bold hover:w-full hover:bg-black">Pay with stripe</button>
           </div>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Cart;
