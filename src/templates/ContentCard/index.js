import React from 'react'
import styles from './index.module.css'

import comingImg from '../../img/coming.png'

export default ({ title,subtitle,columns,img,logo,coming }) => <div className={styles.contentCard}>
	<div>
		<p className={styles.title}>{title}</p>
		<p className={styles.subtitle}>{subtitle}</p>
			<div className={styles.columnWrapper}>
			{
				columns.length > 0 ? columns.map(column => 
					<div className={styles.column} key={column.title}>
						<p className={styles.columnTitle}>{column.title}</p>
						<ul style={{paddingLeft: '1rem'}}>
							{column.items.map(item => <li key={item}>{item}</li>)}
						</ul>
					</div>) : null
			}
			</div>
	</div>
	<div className={styles.bg} style={{backgroundImage: `url(${img})`}}>
		{coming && <img className={styles.coming} src={comingImg}/>}
		<img className={styles.img} src={logo} />
	</div>
</div>
