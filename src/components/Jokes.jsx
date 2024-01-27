import useAxios from '../hooks/useAxios'
import axios from '../apis/dadJokes'

const Jokes = () => {
  const [joke, error, loading] = useAxios({
    axiosInstance: axios,
    method: 'GET',
    url: '/',
    requestConfig: {
      headers: {
        'Constent-Language': 'en-US'
      },
             
      }
    }
     
    return (
      <article>
        <h2>Random Dad Joke</h2>
        {loading && <p>Loading...</p>}

        {!loading && error && <p className='errMsg'>{error}</p>}

        {!loading && !error &&!joke && <p>no dad jokes</p>}
        <button onClick={() => refetch()}>Get Joke</button>
      </article>
    )
  })
}
