import React from 'react';
import styles from './home.less';
import UIButton from '@components/Button/Button.jsx';
export default class Home extends React.Component {
  constructor(props){
    super(props)

  }

  render (){
    return (
      <div className={styles.home}>
        首页123
        <div className={styles.device}>
          首页啊
          <UIButton />
        </div>
      </div>
    )
  }
}
