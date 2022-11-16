import './Cards.css'

function Cards({name,color,price}){
    return(
        <div className={`card ${color}`}>
            <span className='name'>{name}</span>
            <span className='color'>{color}</span>
            <span className='price'>{`R$: ${price.toFixed(2)}`}</span>
        </div>
    )
}

export {Cards}