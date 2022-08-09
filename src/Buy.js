import React,{useEffect,useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {incNumber,decNumber} from "./actions/index"
import '../node_modules/bootstrap/dist/css/bootstrap-grid.css'
import axios from "axios"
import Card from './Card';
import './Buy.css'
function Buy
() {
 
  useEffect(()=>{
    
   
    

                const options = {
                  method: 'GET',
                  url: 'https://ott-details.p.rapidapi.com/advancedsearch',
                  params: {
                    start_year: '1970',
                    end_year: '2020',
                    min_imdb: '6',
                    max_imdb: '7.8',
                    genre: 'action',
                    language: 'english',
                    type: 'movie',
                    sort: 'latest',
                    page: '1'
                  },
                  headers: {
                    'X-RapidAPI-Key': '554175deafmshadeabd2714e1ebep1a6911jsn7bc0c7ae8c1d',
                    'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
                  }
                };
                
                axios.request(options).then(function (response) {
                  console.log(response.data.results);
                  setMovie(response.data.results)
                  setAllMovie(response.data.results)
                }).catch(function (error) {
                  console.error(error);
                });
  }

  )
  const [movie,setMovie]=useState([])
  const [allmovie,setAllMovie]=useState([])
  const [search,setSearch]=useState('')
 
  let handle=(event)=>{
    setSearch(event.target.value)
    let movie1=movie.filter(x=>{
      return x.title.toLowerCase().includes(search.toLowerCase()) 
    })
    console.log(movie1)
    
    if(movie1.length==0)
    {setMovie(allmovie)
      
    }
    else
    {setMovie(movie1)
    }
    


  }
  let handleButton=()=>{
    console.log(search.toLowerCase())
    let movie1=movie.filter(x=>{
      return x.title.toLowerCase().includes(search.toLowerCase())
    })
    console.log(movie1)
    setMovie(movie1)
  }
  const myState=useSelector((state)=> state.changethenum)
  const dispatch = useDispatch();
  return (
    <div>
      {myState.username!='none'?
      <div class='Main'> 
      <div clas="search">
     
      <input onChange={handle}></input>
      <button onClick={handleButton}>search</button>
      </div>

      {search.length!=0?<div class="movie">
       {movie.map(x=>{if( x.title!="High Ground" ){return (<Card image={x.imageurl[0]}/>)}})}
       </div>:
       <div class="movie">
       {allmovie.map(x=>{if( x.title!="High Ground" ){return (<Card image={x.imageurl[0]}/>)}})}
       </div>
}
      



      </div>
      :<div> Login First</div>
      }
    </div>
  )
}

export default Buy
