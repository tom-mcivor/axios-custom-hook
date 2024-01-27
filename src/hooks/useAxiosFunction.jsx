import { useState, useEffect } from "react"

const useAxiosFunction = (configObj) => {
  const [response, setResponse] = useState ([])
  const [error, setError] = useState ('')
  const [loading, setLoading] = useState (false)
  const [reload, setReload] = useState(0)

  const axiosFetch = async ()

  try {
      setLoading(true)
      const ctrl = new AbortController()
      setController
      console.log(res) 
      setResponse(res.data)   
    } catch () {
      console.log(err.message)
      setError(err.message)
    } finally { 
      setLoading(false)
    }   
    }

  useEffect(() => {
        console.log(controller)
        //useEffect data

        return () => controller.abort()
        // eslint-disable-next-line
        return () => controller.abort()
        })
      }
  }, [controller]

  return [response, error, loading, ]
}

export default useAxiosFunction