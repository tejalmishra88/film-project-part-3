import {Link} from 'react-router-dom'


const Home = () => {
  return (
    <div style={{width: '50%', margin: '50px auto', textAlign: 'center', justifyItems: 'center'}}>
      <h1>Welcome to Friday night films project</h1>
      <Link to='/films'>Films</Link>
      <p>Click above to begin Film Search</p>
    </div>
  )
}

export default Home
