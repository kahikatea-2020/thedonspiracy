import React, {useState} from 'react'

function Show (){
  const [count, setCount] = useState(2);
  return(
<div className="show">
  <button onClick={() => setCount(count + 1)}>{count}</button>
</div>
  )
}

export default Show