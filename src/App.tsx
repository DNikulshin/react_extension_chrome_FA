import {useCallback, useState} from 'react'
import axios from 'axios'

interface IItem {
    userId: number,
        id: number,
    title: string,
    completed: boolean
}
function App() {
  const [count, setCount] = useState(0)
    const [items, setItems] = useState<IItem[]>([])
    const [copyUrl, setCopyUrl] = useState('')

    // ?_page=1&_limit=1
    const getData = useCallback( async () => {
        try {
            const {data} = await axios('https://jsonplaceholder.typicode.com/todos')
            setItems(data)
        } catch (e) {
            console.log(e)
        }

    }, [])
    // const onClick = async () => {
    //     // let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    //     // await chrome.scripting.executeScript({
    //     //     target: {tabId: tab.id!},
    //     //     func: () => {
    //     //         document.body.style.backgroundColor = 'green'
    //     //
    //     //     }
    //     // })
    //     await getData()
    // }
  return (
    <div className="app">
        <div className="container">
            <h1>Hello i am extension FA for Chrome</h1>
            <button
                onClick={() => setCount(count + 1)}
                className="btn-counter"
            >
                counter
            </button>
            <button onClick={getData}>
                getData jsonplaceholder
            </button>
            <button onClick={() => {setCopyUrl(window?.location?.href)}}>Copy Url</button>
            <div className="counter">{count}</div>
            <div>{copyUrl}</div>
            <div>{items.length}</div>
            {items && items.map(el => {
                return (
                    <div key={el.id}>
                    <span>{el.userId}</span>
                        <span>{el.title}</span>
                        <span>completed: {el.completed ? 'true': 'false'}</span>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default App
