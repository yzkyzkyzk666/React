import React from 'react'
import ReactDOM from 'react-dom'

function Demo(){

    const [count,countState] = React.useState(0)

    function add(){
        // countState((count)=>{return count+1})
        countState(count=>count+1)
    }

    React.useEffect(()=>{
        let timer = setInterval(()=>{
            countState(count=>count+1)
        },1000)
        return()=>{
            clearInterval(timer)
        }
    },[])

    function unmount(){
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    const MyRef = React.useRef()

    function show(){
        alert(MyRef.current.value)
    }

    return(
        <div>
            <input type='text' ref={MyRef}/>
            <button onClick={add}>+1</button>&nbsp;
            <h2>Count:{count}</h2>
            <button onClick={unmount}>unmount component</button>&nbsp;
            <button onClick={show}>show input data</button>
        </div>
    )
}

export default Demo