import React from 'react';
import styles from './dashBoard.less';

interface IProps {

}

const DashBoard: React.FC<IProps> = () => {
    return (
        <div className={styles.root}>
            仪表盘
        </div>
    )
}

export default DashBoard
