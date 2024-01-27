import axios from '../apis/jsonPH'

const Posts = () => {
  const [posts, error, loading, axiosFetch] = useAxiosFunction()

  const getData = () => {
    axiosFetch()
  }
}

useEffect(() => {
  getDat()
  // eslint-desable-next-line
}, [])

const handleSubmit = () => {
  axoisFetch({
    axiosInstance: axios, 
    method: 'POST',
    url: '/posts',

  })

  return ( 
    <article>

      <h2>Posts</h2>
      
      <div className="row">
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {loading && <p>Loading....</p>}

      {!loading && error && <p className='errMsg'>{error}</p>}

      {!loading && !error && posts?.lenght && 
      <ul>
        Posts.map((post, i) => )
      </ul>
      }

      {!loading && !error && !joke && <p>No dad joke to display</p>}
    </article>
      )
}
