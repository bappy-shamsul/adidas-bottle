import './Bottle.css'

const Bottle = (bottle, handleAddToCart) => {
    const {id, name, seller, img, price} = bottle.bottle

    return (
        <div className='bottle-display'>
            <img src={img} />
            <h3>Name: {name}</h3>
            <h4>ID: {id}</h4>
            <h4>Price: ${price}</h4>
            <h5>Manufecturer: {seller}</h5>
            <button className='btn-bottle-display' onClick={() => handleAddToCart(bottle)}>Add to Cart</button>
            
        </div>
        
    );
};

export default Bottle;