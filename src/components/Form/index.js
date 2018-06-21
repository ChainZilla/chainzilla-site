import React from 'react'
import styles from './index.module.css'

import LetterHead from '../../templates/LetterHead'

const inputs = [
	{
		title: "name of Project Manager",
		name: "manager"
	},
	{
		title: "email",
		name: "email"
	},
]

export default () => <div className={styles.wrapper}>
	<div className={styles.contentWrapper}>
	<div className={styles.form}>
		<LetterHead title="Tell us everything" />
		<h1 style={{textAlign: "center", fontSize: '53.5px', color: '#121329'}}>READY TO LAUNCH</h1>
		<form
			className={styles.formControl}
			name="contact"
			method="post"
			action="/success"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
		>
		  <input type="hidden" name="contact" value="contact" />  
			<div className={styles.inputs}>
				{
					inputs.map(({ title, name }) => <div className={styles.inputWrapper} key={title}><p className={styles.inputTitle}>{title.toUpperCase()}</p><input name={name} className={styles.input} type="text" /></div>)
				}
			</div>
			<p style={{marginTop: '1rem'}} className={styles.inputTitle}>PROJECT INFORMATION</p>
			<textarea className={styles.textarea} />
			<div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
				<button type='submit' className={styles.btn}>GET STARTED</button>
			</div>
		</form>
	</div>
	</div>
</div>
