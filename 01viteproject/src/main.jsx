import React from 'react'
import ReactDOM  from 'react-dom/client'
import App from './App.jsx'
 
function Myapp(){
  return(
    <div>
      <h1> Random react</h1>
    </div>
  )
}
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// } 
const anotherUser="random user"

const ReactElement= React.createElement(
     'a',
     {  href:'https://facebook.com', target:"_blank" },
     'click Me  to Visit facebook',
     anotherUser
) 

 
const anotherElement=(
  <a href="https://google.com" target='_blank'> Visit Google</a>
)
   

ReactDOM.createRoot(document.getElementById('root')).render(
  <App/>
)

