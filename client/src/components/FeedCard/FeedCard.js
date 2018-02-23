import React from 'react';
import "./FeedCard.css";
import {Card, CardTitle, Button} from 'react-materialize';



const FeedCard = props => (


  

<div className='card' >
 <Card key={props.sesame}

    className='small carousel-card' 
    header={<CardTitle className="carousel-card-title"  image={props.link} ><strong>Posted By:</strong>
    <strong>{props.poster}</strong>
    </CardTitle>}
>


</Card>





 </div>



);






export default FeedCard;