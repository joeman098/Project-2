import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Col, Card, Row } from "react-materialize";
import "./SearchRes.css";

const SearchRes = props => {
  const fixed = pic => {
    let fixpic = pic.replace("{width}", "200");
    let fixpics = fixpic.replace("{height}", "200");
    return fixpics;
  };


  if(props.kind == "stream"){
  return (
    <div className="SearchRes">
      <Col m={3} s={6}>
        <Card
          className="search-result-card"
          textClassName="black-text"
          style={{
            "font-size": "16px",
            "background-color": "rgba(255, 255, 255, 0.9)"
          }}
        >
          <Row>
            <Col m={12} s={12}>
              <a href={`/${props.userName}`}>
                <img alt={"h"}  src={fixed(props.pic)} className="" />
              </a>
            </Col>
            <Col m={12} s={12}>
            <div id="result-title-div">
              <p id="result-title">{props.title}</p>
            </div>
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
}
else{
  return (
    <div className="SearchRes">
      <Col m={3} s={6}>
        <Card
          className="search-result-card"
          textClassName="black-text"
          style={{
            "font-size": "16px",
            "background-color": "rgba(255, 255, 255, 0.9)"
          }}
        >
          <Row>
            <Col m={12} s={12} id="img-col">
                <img alt={"h"} onClick={()=>props.GameStreams(props.id)} src={fixed(props.pic)} className="" />
            </Col>
            <Col m={12} s={12}>
           {props.title}
            </Col>
          </Row>
        </Card>
      </Col>
    </div>
  );
}
};

export default SearchRes;
