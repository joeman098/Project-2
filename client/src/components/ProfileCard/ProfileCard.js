import React from 'react';
import "./ProfileCard.css";
import { Button, Icon, Modal, Row, Col } from "react-materialize";



const ProfileCard = props => (
  <div className="profile-card">
  <Row>
  <Col s={12}>
    <img className="banner-list" src={props.banner ? props.banner : "http://www.ehands.ru/bitrix/templates/aspro-allcorp/images/background.png"} />
  </Col>
  </Row>
  <Row>
    <div className="sub-list">
      <Col s={4}>
      <img className="avatar-list" src={props.avatar ? props.avatar : "http://spaceacre.co.za/wp-content/uploads/avatar-1.png"} />
      </Col>
      <Col s={8} id="col-s8">
        <Row>
          <Col s={12}>
            <h3 className="username-list">{props.username}</h3>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
          {
            props.sessionId == props.id ? "" :
            <Button data-class="PM-button" data-id={props.id} onClick={props.goToChat}>PM</Button>
          }
          <Button data-class="Profile-button" data-username={props.username} onClick={props.goToProfile}>Profile</Button>
          </Col>
        </Row>
      </Col>
      <br className="clear" />
    </div>
    </Row>
  </div>
);






export default ProfileCard;