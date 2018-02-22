import React from "react";
import { Link } from "react-router-dom";
import {Button, Icon, Col, Card} from 'react-materialize'


const SearchRes = props =>{
const fixed = (pic) =>{
    let fixpic = pic.replace("{width}","100");
     let fixpics =fixpic.replace("{height}","100");
    console.log(fixpics)
    return fixpics
}
    return(
<div className="SearchRes">
<Col m={3} s={3}>
		<Card className='blue-grey darken-1' textClassName='white-text' title='Card title' actions={[<a href='#'>This is a link</a>]}>
		<img alt={"h"} src={fixed(props.pic)}  className="" />
		</Card>
</Col>
</div>
    )
}

export default SearchRes;