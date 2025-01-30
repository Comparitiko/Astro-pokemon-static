import { createSignal } from 'solid-js'

export const Counter = () => {

	const [count, setCount] = createSignal(0)

	return (
		<>
			<h1 class='text-5xl'>Counter</h1>
			<h3 class={`text-xl ${count() < 0 ? 'text-red-500' : 'text-green-500'}`}>Value: {count()}</h3> 
			<button class='bg-blue-500 p-2 mr-2 rounded' onClick={() => setCount(prev => ++prev)}>+1</button>
			<button class='bg-blue-500 p-2 mr-2 rounded' onClick={() => setCount(prev => --prev)}>-1</button>
		</>
	)
}