import ListHolder from "./components/ListHolder";
import Header from "./components/Header";

import "./App.scss";

const ListofCards=[{
  name:'Task1',
  type:'good',
  taskId:1
},
{
  name:'Task1',
  type:'bad',
  taskId:2
},
{
  name:'Task1',
  type:'good',
  taskId:3
},
{
  name:'Task1',
  type:'good',
  taskId:4
}
]

function App() {
  return (
    <div className="app">
     <Header/>
     <ListHolder list={ListofCards}/>
    </div>
  );
}

export default App;
