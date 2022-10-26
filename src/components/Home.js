import { useNavigate } from 'react-router-dom';


const Home = (props) => {
	const navigate = useNavigate();
	console.log('props in home', props)

	return (
		<>
			<h2>Home Page</h2>
			{navigate('/cats')}
		</>
	)
}

export default Home
