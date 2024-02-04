import { useState, useEffect } from 'react'

const ProductFetcher = ({ render, apiAddress }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiAddress || 'https://js2-ecommerce-api.vercel.app/api/products')
        if (!response.ok) {
          throw new Error('Failed to fetch data')
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [apiAddress])

  return render({ data, loading, error })
}

export default ProductFetcher