import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Image from './component/Image'
import Pagination from './component/Pagination';
import { USER_PER_PAGE } from './utils/pageconst';
import Inputs from './component/Inputs'
import './component/Input.css'



function App() {
  const [datas,setData] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setpage] = useState(1)
  const [totalPage, setTotalPage] = useState(0);
  const [search , setsearch] = useState('')
  const [query , setquery] = useState('all')


  useEffect(() => {
    getData();
  }, [query])

 const getData = async() =>{
   setLoading(true);
    const res = await axios(`https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=GSXed7BMAHzmskGCwo_Y-1mMub84DjNTNqon82SYnAo`)
    setLoading(false);
    setData(res.data.results)
    setTotalPage(Math.ceil(res.data.results.length/USER_PER_PAGE))

 }

 const updateSearch = e =>{
   
    setsearch(e.target.value)
};

const getSearch = e =>{
  e.preventDefault();
  if(search ==""){
    alert('plz fill the input box')
  }
  else{
  setquery(search);}
  setsearch('');
}

 const handleClick = num => {
   setpage(num)
 }
   
 
  return (
    <React.Fragment>

      <div className="App">
          <Inputs
          search = {search}
          getSearch = {getSearch}
          updateSearch = {updateSearch}/>
          {loading ?<h1>Loading ...</h1>
         :
         <div className="image_page">
        <div className="image_box">
          <Image datas={datas}
          page = {page}/>
        </div>  
          
          <Pagination  totalPage={totalPage}
          handleClick={handleClick}/>
          
        </div>
      }
    </div>
    </React.Fragment>
    
  );
}

export default App;
