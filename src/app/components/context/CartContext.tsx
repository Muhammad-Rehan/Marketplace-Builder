"use client"

import {  createContext , useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({children}: any) => {

    // managing cart state for showing cart section
    const [showCart , setShowCart] = useState(false)

    // managing quantity of product
    const [qty , setQty] = useState(1)

    // managing add to cart state
    const [cartItems, setCartItems] =useState<any[]>([])

    //managing cart quantity
    const [totalQuantity , settotalQuantity] = useState(0) 

    //managing total price of the items\
    const [totalPrice , setTotalPrice] = useState<number>(0)




// cart qty increase function
const incQty = ()=>{
    setQty((prevQty)=> prevQty + 1)
}
// cart qty decrease function
    const decQty = ()=>{
        setQty((prevQty)=> {
            if(prevQty - 1 < 1) return 1
            return prevQty - 1
        })
    }

    // remove items from the cart
    const onRemove = (product:any)=> {
        let foundProduct = cartItems.find((item) => item._id === product._id)
        const newCartItems = cartItems.filter((item)=>item._id !== product._id )
        setCartItems(newCartItems)
        setTotalPrice((prevTotal) => prevTotal - foundProduct.price* foundProduct.quantity)
        settotalQuantity((prevQty)=> prevQty - foundProduct.quantity)
        
    } 

    const toggleCartItemQty = (id:any, value:any)=> {
        
        let foundProduct = cartItems.find((item) => item._id === id)
        const index = cartItems.findIndex((product)=> product._id === id)
        const updatedCartItems = [...cartItems]

        if(value === 'plus'){
            
            updatedCartItems[index] = {...updatedCartItems[index], quantity:updatedCartItems[index].quantity + 1}
            setCartItems([...updatedCartItems])
            setTotalPrice((prevTotalPrice) => Number(prevTotalPrice) + Number(foundProduct.price))
            settotalQuantity((prevTotalQty)=> prevTotalQty + 1)
            
        }else if(value === 'minus'){
            if(foundProduct.quantity > 1){
                updatedCartItems[index] ={...updatedCartItems[index], quantity:updatedCartItems[index].quantity - 1}
                setCartItems([...updatedCartItems])
                setTotalPrice((prevTotalPrice) => Number(prevTotalPrice) - Number(foundProduct.price))
                settotalQuantity((prevTotalQty)=> prevTotalQty - 1)
            }

        }
    }

// function that handle add to cart
    const handleAddProduct = (product:any , quantity:number)=>{
        const checkProductInCart = cartItems.find((item:any) => item._id === product._id)
        settotalQuantity((prev)=> prev + quantity)
        setTotalPrice((prevTotalPrice) => Number(prevTotalPrice) +  Number(product.price) * quantity)

        if(checkProductInCart){
            const updatedCartItems =  cartItems.map((cartProduct:any)=>{
                if(cartProduct._id === product._id){
                    return {...cartProduct , quantity: cartProduct.quantity + quantity}
                }
                else{
                    return cartProduct
                }
            })
            setCartItems(updatedCartItems)
        }else{

            product.quantity = quantity
            setCartItems([...cartItems , {...product}])
        }

    }

    return (
        <CartContext.Provider value={{showCart, setShowCart , qty , incQty , decQty , cartItems , handleAddProduct ,totalQuantity, totalPrice , toggleCartItemQty , onRemove }}>
            <div>{children}</div>
        </CartContext.Provider>
    )
}