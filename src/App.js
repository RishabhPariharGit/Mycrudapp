import {useState, useEffect} from "react"
import axios from "axios"
import './App.css'

function App(){
 
const [playerdt, setplayerdt] = useState(null);

useEffect(() => {
  fetchDet();
}, [])


const fetchDet = async() =>{

const res = await axios.get("http://localhost:5070/plydt");
  
setplayerdt(res.data.getplayercompt)


}

//   return(<div className="App">
// <table>
//             <tr>
//     <th>Person 1</th>
//     <th>Person 2</th>
//     <th>Person 3</th>
//   </tr>
//       {playerdt && playerdt.map((det) => {
//         return(
//           <div>
            
//               <tr>
//                 <td>{det.name}</td>
//                 <td>{det.club}</td>
//                 <td>{det.goals}</td>
//               </tr>
//           </div>
//         )
//       })}
//       </table>
//     </div>
//   );


return (
  <div className="App">
      <table>
          <tr>
              <th>Name</th>
              <th>Club</th>
              <th>goals</th>
          </tr>
          {playerdt && playerdt.map((det) => {
              return (
                  <tr>
                      <td>{det.name}</td>
                      <td>{det.club}</td>
                      <td>{det.goals}</td>
                  </tr>
              )
          })}
      </table>
  </div>
);

}

export default App
