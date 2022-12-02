import LogoComponent from "../Components/LogoComponent";
import {Card, Input,Box, InputAdornment} from "@mui/material"
import NavBar from "../Components/NavBar";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from "react";
import FilteredVerticalCards from "../Components/FilteredVerticalCards";
const l = [
  
    {
      src: 'https://images.unsplash.com/photo-1619926340139-9a2e2245a64e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Empanadas',
      price: 1200,
      type: 'Entrada'
    },
    {
      src: 'https://images.unsplash.com/photo-1603208785984-cdf985beca7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80',
      title: 'Sopa Calabaza',
      price: 1200,
      type: 'Entrada'
    },
  
    {
      src: 'https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      title: 'Salmón',
      price: 1900,
      type: 'Plato Principal',
    },
  
    {
      src: 'https://images.unsplash.com/photo-1635552709208-41a3d96f7bdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Hamburguesa',
      price: 1200,
      type: 'Plato Principal'
  
    },
    {
      src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'Casuela de mariscos',
      price: 200,
      type: 'Plato Principal'
  
    },
    {
      src: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      title: 'Cheesecake',
      price: 700,
      type: 'Postre'
    },
    {
      src: 'https://images.unsplash.com/photo-1505252929202-c4f39cda4d49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'Volcan chocolate',
      price: 700,
      type: 'Postre'
    },
    {
      src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      title: 'Helado',
      price: 500,
      type: 'Postre'
    },
  ];
  
export default function Filter({food})
{
    const [filteredFood, setFilteredFood] = useState(food)
    const [filter, setFilter] = useState("")



    const filterfood=()=> {
      setFilteredFood(food.filter(f => f.name.toLowerCase().includes(filter.toLowerCase())))
    }

    const handleChange=(e)=>{
        setFilter(e.target.value)
        filterfood()
        console.log(filter)
    }
    return(
        <>
            <LogoComponent />
            <Box sx={{height:'100vh', backgroundColor: 'black'}}>
            <Box sx={{ width: '100%', height:'0.3vh', backgroundColor: "white"}}></Box>

            <Input
            id="input-with-icon-adornment"
            startAdornment={
                <InputAdornment position="start" sx={{ paddingLeft: '2vw'}}>
                <SearchIcon />
                </InputAdornment>
            
            }
            value={filter}
            onChange={handleChange}
            sx = {{backgroundColor: 'white', marginTop: '5vh', width:'80%', height:'5vh', borderRadius:'10px'}}/>

            <FilteredVerticalCards food={filteredFood}></FilteredVerticalCards>


            
            <Box sx={{ width: '100%', height:'100%', backgroundColor: "black"}}>
            </Box>
            </Box>
            
            <NavBar />
        </>
    )}