/**
 * 自定义text input组件
 */
import React from 'react';
import styles from './YInput.less';

class CustomTextInput extends React.Component{
    constructor(props){
        super(props)
        this.textInput = null;
        this.setTextInputRef = element => {
            this.textInput = element;
        }
    }
    focusTextInput = ()=> {
        if (this.textInput) this.textInput.focus();
    }

    componentDidMount(){

    }
    render(){
        return (
            <div className={styles.root}>
                <input type="text" ref={this.setTextInputRef} className={styles.intext}/>
                <input type="button" value="fouce" onClick={this.focusTextInput}/>
            </div>
        )
    }
    // render(){
    //     return (
    //         <div>
    //             <input type="text" ref={this.props.inputRef}/>

    //         </div>
    //     )
    // }
}

export default CustomTextInput

