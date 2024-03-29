import { createResource, createSignal } from 'solid-js'
import { apiClient } from '../../edenTreaty';

/** A counter written with Solid */
export default function SolidCounter({ children }) {
	const [count, setCount] = createSignal(0)
	const add = () => setCount(count() + 1)
	const subtract = () => setCount(count() - 1)
	const [data] = createResource({ tweetId: 2 }, getTweets);
	console.log(data);
	return (
		<>
			<div id="solid" class="counter">
				<button onClick={subtract}>-</button>
				<pre>{count()}</pre>
				<button onClick={add}>+</button>
			</div>
			<div class="counter-message">{children}</div>
		</>
	)
}

export async function getTweets({ tweetId }: { tweetId: number }) {
	return apiClient.tweets[2].get();
}
  
  
