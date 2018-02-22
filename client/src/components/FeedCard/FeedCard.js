import React from 'react';
import "./FeedCard.css";
import {Card, CardTitle, Button} from 'react-materialize';



const FeedCard = props => (


  
  // <div className={props.shake}>
  // <div className='card '>
  // <img alt={props.link} src={props.link}  className="imagez card-img openModal" />
  //   <div className="card-img-overlay h-100 d-flex flex-column justify-content-end" >
      
   
  //     <ul>
  //       <li>
  //         <strong>Posted By:</strong> {props.poster}
  //       </li>
      
      
  //     </ul>
  //     </div>
    
  //   </div>
<div className='card' >
 <Card key={props.sesame}

className='small' 
header={<CardTitle  image={props.link} ><strong>Posted By:</strong>
 <strong>{props.poster}</strong>
 </CardTitle>}
reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
<p>Here is some stuff</p>

</Card>

{/* <Card header={<CardTitle reveal image={props.link} waves='light'/>}
		title="Card"
      
		reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
		<p>Click  to reveal Meme</p>
</Card> */}



 </div>



);


// onClick={() => props.openModal(props.id)}



export default FeedCard;