 import React from 'react';
import { useParams } from 'react-router-dom';
 import { useGetPostRekQuery } from '../redux/movies';
import CardMovie from './card/CardMovie';
 
 const RekCard = () => {
    
    const {id} = useParams()
    const {data} =useGetPostRekQuery(id)
  console.log(data);
    return (
        <div>
            <CardMovie data={data}/>
        </div>
    );
 };
 
 export default RekCard;