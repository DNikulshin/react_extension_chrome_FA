import { useCallback, useState } from "react";
import axios from 'axios'

interface PropTypes {
    copyUrl: string
    typeUrl: string
    typePosition: string
}

export const useData = () => {
const [items, setItems] = useState([])
const sendToServer = useCallback( async ({copyUrl, typeUrl, typePosition}: PropTypes) => {
    // if(!raedy) return
    try {
    
        const {data} = await axios.post('https://46.44.24.51/api/resume/search', {
        url: copyUrl,
        type: typeUrl,
        position: typePosition,
    
    })
    setItems(data)
    console.log(data);
    
    } catch (e) {
        console.log(e)
    }
    
    }, [])

    return {
        sendToServer,
        items
    }
}