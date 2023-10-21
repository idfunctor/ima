/** @jsxImportSource preact */

// can change to react import as mode is preact-compat
import { useState } from 'preact/hooks'

/** A counter written with Preact */
export function PreactCounter({ children }) {
	const [count, setCount] = useState(0)
	const add = () => setCount((i) => i + 1)
	const subtract = () => setCount((i) => i - 1)

	return (
		<>
			<div class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="counter-message">{children}</div>
		</>
	)
}
