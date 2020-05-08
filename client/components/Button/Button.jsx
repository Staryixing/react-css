import React,{Component, createRef, forwardRef} from 'react';
import styles from './Button.less';

class YButton extends React.PureComponent{
  render(){
    return (
      <div className={styles.cont}>{this.props.children}</div>
    )
  }
}

export default YButton
