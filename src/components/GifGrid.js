import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])
    
    //Use effect ejecuta una función cuando el componente es renderizado por primera vez
    useEffect(()=>{
        getGifs()
    }, [])

    const getGifs = async()=>{
        const url = 'https://api.giphy.com/v1/gifs/search?q=phineas&limit=10&api_key=CrEAOue8VpcjPYg0t7FbgEE3olJ4Hato';        
        const resp = await fetch(url)
        const {data} = await resp.json()

        const gifs = data.map((img)=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        
        setImages(gifs)
    }    

    return (
        <>
            <h3>{category}</h3>             
            <div className="card-grid">
                {
                    images.map(img=>(
                        <GifGridItem key={img.id} {...img}/>
                    ))
                }            
            </div>
        </>
    )
}
