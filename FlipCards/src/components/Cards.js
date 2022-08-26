import { useState } from 'react'
import Card from './Card'
import {info} from '../data/item'
function Cards(){
    const [items, setItems] = useState(info)
    const [prev, setPrev] = useState(-1)

    function handleClick(id){
        if(prev === -1){
            items[id].stat = "active"
            setItems([...items])
            setPrev(id)
        }else{
                items[id].stat = "active"
                items[prev].stat = ""
                setItems([...items])
                setPrev(-1)
            }
    }

    return (
        <div className="container">
            { items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            )) }
        </div>
    )
}

export default Cards