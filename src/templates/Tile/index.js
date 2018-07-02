import React from 'react'
import styles from './index.module.css'

export default ({ title, text, logo }) => <div className={styles.tile}>
	<div>
		<img className={styles.logo} src={logo} />
	</div>
	<div>
		<h1 style={{fontFamily: "Oswald"}}>{title.toUpperCase()}</h1>
		<p>{text}</p>
	</div>
</div>