import { useCallback, useState } from "react"

 export const useUrl = () =>  {
    const [copyUrl, setCopyUrl] = useState('')
    const [typeUrl, setTypeUrl] = useState('')
    const [typePosition, setTypePosition] = useState('')



const copyUrlhandler =  useCallback(() => {
const position = decodeURI(window.location.href).split('&').filter(el => el.includes('text=')).join('').split('text=')[1]
setCopyUrl(window.location.href)
setTypeUrl(window.location.href.split('/')[2])
setTypePosition(position)
}, [])

    return {
        copyUrlhandler,
        copyUrl,
        typeUrl,
        typePosition
    }
}



