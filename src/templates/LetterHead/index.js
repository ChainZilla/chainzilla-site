import React from 'react'
import styles from './index.module.css'

export default ({ title, color }) => <div className={styles.letterHead}>
	<span className={styles.line}></span><p style={color ? {color: `${color}`} : null} className={styles.text}>{title.toUpperCase()}</p><span className={styles.line}></span>
</div>