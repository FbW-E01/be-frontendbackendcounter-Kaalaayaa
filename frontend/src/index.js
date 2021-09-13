import React from 'react'
import ReactDOM from 'react-dom'

function App(){
    function getNumber(){
        fetch("http://localhost:3333/")
            .then(result => result.text())
            .then(text => console.log(text))
            .catch(error => console.log("FAAAAAIIIILLLLEEEDDDD" + error))
    }

    function incNumber() {
        const init = {method: "POST"}
        fetch("http://localhost:3333/", init)
            .then(result => result.text())
            .then(text => console.log(text))
            .catch(error => console.log("FAAAAAIIIILLLLEEEDDDD" + error))
    }


    return (
        <div>
            <button onClick={getNumber}>Get Number</button>
            <button onClick={incNumber}>Increase Number</button>
        </div>
    )
}


ReactDOM.render(<App />, document.body)