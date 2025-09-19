import { use, useCallback, useState  ,useEffect, useRef} from 'react'


function App() {
   
 const[length,setLength]  =useState(8)
    const[Num,setNum] =useState(false) 
    const [char,setchar]=useState(false)
      const [Password,setPassword]=useState('')   
      const passwordRef=useRef(null)
   const passwordGenerator=useCallback(()=>{
       let pass=""
       let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"  
      
       if(Num)str+="0123456789" 
       if (char )str+=".,/'{}[]&*%$#@!:;+-"
      for(let i=1; i<=length;i++){
        let char= Math.floor (Math.random() *str.length+1 ) 
        pass+= str.charAt(char)
      } 
      setPassword(pass)
   
      
   } ,[length,Num,char,setPassword])

   const copyPasswordtoclipboard= useCallback(()=>{ 
       passwordRef.current?.select();
         passwordRef.current?.setSelectionRange(0,24);
       // another way to do the same. window.navigator.clipboard.writeText(Password)
   } ,[Password]) 


  useEffect(()=>{ 
  passwordGenerator()
 },[length,Num,char,passwordGenerator])
    return (
    <>
  <div className='w-full max-w-md text-orange-500   mx-auto shadow-md rounded-lg px-4 my-8   bg-gray-800'>  
    <h1 className='text-white text-center my-3'> Password Generator</h1> 
    <div className='flex shadow gap-4 rounded-lg overflow-hidden mb-4'>
    <input    
     type="text" 
     value={Password}
     className=' text-black outline-none rounded-md  bg-white w-3/4 py-1 px-3' 
     placeholder='Password' 
    readOnly 
    ref={passwordRef}
     /> 
     <button onClick={copyPasswordtoclipboard} className='text-white bg-blue-500 w-1/4 rounded-md shrink'>Copy</button>
   </div> 
   <div className='flex text-sm gap-x-2' >
    <div className='flex items-center gap-x-1'> 
       <input  
       type="range" 
       min={6}
       max={24}
       value={length}
       className='cursor-pointer' 
       onChange={(e)=>{setLength(e.target.value)}}
       /> 
       <label > Length:{length}</label>
    </div> 
    <div className='flex items-center gap-x-1'>
      <input type="checkbox"
      defaultChecked={Num}
      id="numberinput"
      onChange={()=>{
         setNum((prev)=>!prev);
      }}
 /> <label >Numbers</label>
    </div> 
      <div className='flex items-center gap-x-1'>
      <input type="checkbox"
      defaultChecked={char}
      id="charinput"
      onChange={()=>{
         setchar((prev)=>!prev);
      }}
 /> <label >Characters</label>
    </div>
   </div>
  </div>
    </>
  )
}

export default App
