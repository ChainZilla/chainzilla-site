import React from 'react'
import styles from './index.module.css'

export default ({ title, text, img }) => <div className={styles.card}>
	<div>
		{img && <div className={styles.img} style={{backgroundImage: `url(${img})`}}/> }
	</div>
	<div style={{padding: '0 .5rem'}}>
		<h1 style={{fontSize: '1.6rem', marginTop: '.5rem'}}>{title}</h1>
		<p style={{marginTop: '.5rem'}}>{text}</p>
	</div>
</div>