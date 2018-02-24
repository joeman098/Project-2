import React from 'react';
import "./FeedCard.css";
import {Card, CardTitle, Button} from 'react-materialize';



const FeedCard = props => (
  <div className="feed-card">
    {/* <img class="responsive-img" src={props.link} />
    <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
      <strong>Posted By:</strong> {props.poster}
    </div> */}
    <Card
      key={props.sesame}
      className="small feed-cardz"
      header={<CardTitle image={props.link} />}
    >
      <p id="posterName">Posted By:
      {props.poster}</p>
    </Card>
  </div>
);






export default FeedCard;