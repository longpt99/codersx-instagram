import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

Header.propTypes = {
  
};

function Header(props) {
  const {userInfo} = props;
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(userInfo)
  }, [userInfo])

  if(!user) {
    return <h1>Loading</h1>
  }

  return (
    <header className={styles.profile_header}>
      <div className={styles.profile_avatar}>
        <img src={user.profilePictureUrl} alt="" srcset=""/>
        <div></div>
      </div>
      <div className={styles.profile_primary}>
        <div className={styles.profile_nickname}>
          <span>{user.nickname}</span>
          <Link to='/accounts/setting' title='chỉnh sửa trang cá nhân'>
            <ion-icon name="settings-outline"></ion-icon>
          </Link>
        </div>
        <ul className={styles.profile_title}>
          <li>
            <span><span className={styles.profile_common_title}>6 </span>bài viết</span>
          </li>
          <li>
            <Link><span className={styles.profile_common_title}>250 </span>người theo dõi</Link>
          </li>
          <li>
            <Link>Đang theo dõi <span className={styles.profile_common_title}>100 </span>người dùng</Link>
          </li>
        </ul>
        <div className={styles.profile_description}>
          <span className={styles.profile_description_name}>{user.name}</span>
          <br />
          <span>
            Phương Thành Long | 🇻🇳
            just be a good person/>
            –––
            ✉️ phuongthanhlong.99@gmail.com
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;