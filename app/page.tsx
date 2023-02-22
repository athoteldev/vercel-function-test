'use client'
import styles from './page.module.css'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

export default function Home() {

	const router = useRouter()

	const updateURL = useCallback(() => {
		console.log('updating URL')
		router.push(`/?param=${Math.random()}`)
	}, [router])

	return (
		<main className={styles.main}>


			<div className={styles.center}>
				<button onClick={() => updateURL()}>Update URL</button>
			</div>

		</main>
	)
}
