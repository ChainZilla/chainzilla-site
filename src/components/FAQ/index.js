import React from 'react'
import styles from './index.module.css'

const items = ["Blockchain entrepreneurs",
"ONGs that are upgrading to the blockchain era",
"Private companies that require a blockcain for",
"Individuals with a gread idea who want to create a crpyto shit",
"Companies that are implementing a utility token",
"Non profit cryptocurrency ogs",
"Academic blockchain people"
]

export default () => <div className={styles.faq}>
	<div className={styles.contentWrapper}>
		<h1 style={{textAlign: 'center', fontSize: '53.5px'}}>FAQ & SUPPORT</h1>
		<div className={styles.wrapper}>
			<h2>Where can I go for help?</h2>
			<p style={{fontWeight: '300', fontSize: '.7rem'}}>Click <a style={{color: 'white'}} href="http://support.chainzilla.io/a/solutions/"> HERE</a> to open a ticket and we will address your issue as soon as we can.</p>
			<h2>Who can use Chainzilla?</h2>
			<ul>
				{
					items.map(item => <li key={item}>{item}</li>)
				}
			</ul>
			<h2>Does Chainzilla OFFER SPECIAL PARTNERSHIPS?</h2>
			<p style={{fontWeight: '300', fontSize: '.8rem'}}>Yes, Chainzilla offers special partnerships to qualified projects and custom blockchain solutions. Our management consulting services focus on our clients' most critical issues and opportunities: strategy, technology, marketing, and community. We bring deep, functional expertise provided by highly skilled professionals from the blockchain space.</p>
		</div>
	</div>
</div>