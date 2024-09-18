import { useEffect, useState } from 'react';
import './Bottles.css'
import Bottle from '../Bottle/Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    const handleAddToCart = bottle =>{
        const newCart = [...cart, bottle]
        setCart(newCart)
        console.log('added', bottle)
    }
    return (
        <div>
            <h2>Welcome to bottle factory!!!</h2>
            <h3>Number of total Bottles: {bottles.length}</h3>
            <h3>Cart: {cart.length}</h3>

            <div className='bottle-container'>
            {
                bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle={bottle}
                    handleAddToCart={handleAddToCart}></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;