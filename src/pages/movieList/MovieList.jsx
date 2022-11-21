import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPostInfoQuery } from '../../redux/movies';

const MovieList = () => {
  const  {id}=useParams()
    const {data}= useGetPostInfoQuery(id)
    console.log(data);
    return (
        <div>
            
        </div>
    );
};

export default MovieList;