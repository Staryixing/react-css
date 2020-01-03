import React from 'react';
import styles from './home.less';

export default class Home extends React.Component {
  render (){
    return (
      <div className={styles.home}>
        首页123
        <div className={styles.device}>
          首页啊
        </div>
      </div>
    )
  }
}
