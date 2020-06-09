import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from "reactstrap";

import Follow from '../../components/Home/Follow'
import Post from '../../components/Home/Post'
import Story from '../../components/Home/Story'
import Modal from '../../components/Home/Modal'

import { actFetchUserRequest } from '../../store/actions';


Home.propTypes = {
  
};

function Home(props) {
  const {fetchUser, user} = props;
  const [isHideModal, setHideModal] = useState(true);

  function handleModal(value) {
    setHideModal(!value)
  }

  useEffect(() => {
    fetchUser();
  }, [])

  return (
    <div className='home-page'>
      {
        !isHideModal && <Modal handleModal={handleModal}/>
      }
      <Container>
        <Row>
          <Col xs='8'>
            <Row>
              <Col>
                <Story />
              </Col>
            </Row>
            <Row>
              <Col>
                <Post handleModal={handleModal}/>
              </Col>
            </Row>
          </Col>
          <Col>
            <Follow userInfo={user}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => {
      dispatch(actFetchUserRequest());
    } 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);