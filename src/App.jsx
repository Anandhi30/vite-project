import Login from "./login";
import Home from "./Home";

import { BrowerRouter as Router,Router,Router}
from "react-routrer-dom";

function App(){
    const [Flag,setFlag]=useState(true);
  
    let changePage=()=>{
        setFlag(false);
    }
    if(Flag){
        return(
        <div className="container">
        <h4> "my react app" </h4>
        <Login cp={changePage}/>

        </div>
        )

    }else{
        return(
    <div className="container">
        <Home/>
    </div>
        )
}
}
export default App;
