import { createSignal, type Component, type JSX } from 'solid-js'

interface Props {
	counterValue?: number
	children?: JSX.Element
}

export const Counter: Component<Props> = ({counterValue = 0, children}) => {

	const [count, setCount] = createSignal(counterValue)

	return (
		<>
			{children}
			<h3 class={`text-xl ${count() < 0 ? 'text-red-500' : 'text-green-500'}`}>Value: {count()}</h3> 
			<button class='bg-blue-500 p-2 mr-2 rounded' onClick={() => setCount(prev => ++prev)}>+1</button>
			<button class='bg-blue-500 p-2 mr-2 rounded' onClick={() => setCount(prev => --prev)}>-1</button>
		</>
	)
}