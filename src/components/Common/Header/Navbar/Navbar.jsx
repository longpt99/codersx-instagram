import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

import { Container, Row, Col } from "reactstrap";

import { Link, NavLink } from 'react-router-dom'
import Search from '../Search/';

function TopNav(props) {
  const { adminInfo, showOption } = props;
  return (
    <div className={styles.header_nav}>
      <Container>
        <Row className='align-items-center'>
          <Col>
            <NavLink to="/" onClick={props.handleBackToHomePage}>Instagram</NavLink>
          </Col>
          <Col>
            <Search />
          </Col>
          <Col>
            <div className={styles.header_right}>
              <Link to="/" onClick={props.handleBackToHomePage}>
                <ion-icon name="home-sharp"></ion-icon>
              </Link>
              <Link to="/direct/">
                <ion-icon name="paper-plane-outline"></ion-icon>
              </Link>
              <Link to="/explore/">
                <ion-icon name="earth-outline"></ion-icon>
              </Link>
              <Link to="/account/activity/">
                <ion-icon name="heart-outline"></ion-icon>
              </Link>
              <button 
                onClick={props.handleOptionClick}
                className={styles.btn_config}
              >
                <ion-icon name="person-circle-outline"></ion-icon>
              </button>
              {
                <div className={styles.header_option}>
                  <Link to={`/${adminInfo.nickname}`} className={styles.header_option_item}>
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <span>Trang cá nhân</span>
                  </Link>
                  <Link to='/account' className={styles.header_option_item}>
                    <ion-icon name="settings-outline"></ion-icon>
                    <span>Cài đặt</span>
                  </Link>
                  <button value='btn' className={`${styles.btn_logout} ${styles.header_option_item}`} onClick={props.handleLogoutClick} >
                    Đăng xuất
                  </button>
                </div>
              }
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TopNav;