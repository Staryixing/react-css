import React from 'react';
import styles from './home.less';
import Conuter from '@components/Counter';
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
          <Conuter />
        </div>
      </div>
    )
  }
}
