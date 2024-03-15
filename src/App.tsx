import WrapperExample from './components/Example1/WrapperExample';
import HookExample from './components/Example2/HookExample';

function App() {
	return (
		<div>
			WrapperExample:
			<WrapperExample />
			HookExample:
			<HookExample key={1}/>
		</div>
	);
}

export default App;
