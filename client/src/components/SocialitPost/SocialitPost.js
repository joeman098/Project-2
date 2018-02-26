import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Col, Card, Row ,CardTitle} from "react-materialize";
import "./SocialitPost.css";

const SocialitPost = props => {

  
  return (
    <div className="SocalitPost">


      <Card className='small socialitCard'
	header={<CardTitle image='https://react-materialize.github.io/img/sample-1.jpg'>{props.title}</CardTitle>}
	actions={[<a href='#'>Comment</a>]}>
	Submited by {props.author}
        </Card>
 

    </div>
  );
};

export default SocialitPost;
