import React, { useState } from 'react'
import { Button, Form, InputGroup, Table} from 'react-bootstrap'
import { CiSearch } from "react-icons/ci";
import { useSearchUniMutation } from '../../redux/Apis/UniApi';
import {toast} from "react-toastify"
import { IoChevronBack } from "react-icons/io5";
import { useSaveFavMutation } from '../../redux/Apis/FavApi';

const Home = () => {
    const [showSearch, setShowSearch] = useState(false)
    const [query, setQuery] = useState('')
    const [searchUni, {data, isLoading, isfetching}] = useSearchUniMutation();
    const [saveFav, {isLoading: isSaving, error}] = useSaveFavMutation();
    const searchHandler = (e) => {
       
        e.preventDefault();
        setShowSearch(true)
        searchUni({query}).unwrap();
        
        if (!isLoading && data?.results.length === 0) {
            toast("Jokes not found", {type: "error"})
        }
    
        setQuery("")
    }

    const FavoriteHandler = (name, country, web_page) => {
      console.log(name, country, web_page)
      saveFav({name, country, web_page}).unwrap().then(() => toast("Added to favorites", {type: "success"})).catch(() => {
        console.log(error)
        toast("Joke has already been saved", {type: "error"})
      })
    }

    if (isLoading || isfetching) {
        return <div>Loading....</div>
    }


    if (!isLoading && data?.length > 0 && showSearch) {
        return (
           <div className="container mb-5">
            <Button className="mb-2" variant="light" onClick={() => setShowSearch(false)}><IoChevronBack size={25} /></Button>
            <Table>
            <thead>
                <tr>
                <th>#</th>
                <th>Name</th>
                <th>Country</th>
                <th>Website</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                <tr key={item.index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td><a href={item.web_pages[0]} target="_blank">{item.web_pages[0]}</a></td>
                    <td><Button onClick={() => FavoriteHandler(item.name, item.country, item.web_pages[0])} disabled={isSaving}>Add to Favourites</Button></td>
                </tr>
                ))}
            </tbody>
            </Table>
           
           </div>
        )   
    }

  return (
    <>
    <div className='d-flex justify-content-center align-items-center vh-100 '>
        <InputGroup className="mb-3 shadow rounded"  style={{width: '50%'}}>
        <Form.Control
          placeholder="Search for a joke...."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          className='border-0'
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-secondary" className='border-0' id="button-addon2" onClick={searchHandler}>
          <CiSearch size={25}/>
        </Button>
      </InputGroup>
    </div>
    </>
  )
}

export default Home