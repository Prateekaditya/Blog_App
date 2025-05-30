'use client'
import useSWR from 'swr'
 

const Dashboard = () => {
  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )
  console.log(data)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard