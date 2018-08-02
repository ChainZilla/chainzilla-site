import React from 'react'
import { connect } from "react-redux";
import { Element } from 'react-scroll'
import styles from './index.module.css'

import LetterHead from '../../templates/LetterHead'
import wave2 from '../../img/wave4.png'

const inputs = [
	{
		title: "name of Project Manager",
		name: "manager",
		type: "text"
	},
	{
		title: "email",
		name: "email",
		type: "email"
	}
]

const mapStateToProps = state => ({
	currentLanguage: state.currentLanguage,
	letterhead: state.form.letterhead,
	project: state.form.project,
	started: state.form.started,
	launchText: state.form.launchText
})

const Form = ({ currentLanguage,letterhead,project,started,launchText  }) => <Element name='form'><div className={styles.wrapper}>
	<img className={styles.wave} src={wave2} />
	<div className={styles.contentWrapper}>
	<div className={styles.form}>
		<LetterHead title={letterhead[currentLanguage]} />
		<h1 style={{textAlign: "center", fontSize: '53.5px', color: '#121329'}}>{launchText[currentLanguage]}</h1>
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
					inputs.map(({ title, name, type }) => <div className={styles.inputWrapper} key={title}><p className={styles.inputTitle}>{title.toUpperCase()}</p><input autoComplete={name} name={name} className={styles.input} type={type} required/></div>)
				}
			</div>
			<p style={{marginTop: '1rem'}} className={styles.inputTitle}>{project[currentLanguage]}</p>
			<textarea name='information' className={styles.textarea} required minLength='60' />
			<div style={{display: 'flex', justifyContent: 'center', marginTop: '1rem'}}>
				<button type='submit' className={styles.btn}>{started[currentLanguage]}</button>
			</div>
		</form>
	</div>
	</div>
</div>
</Element>

export default connect(mapStateToProps)(Form)
