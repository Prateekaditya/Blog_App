'use client'
import useSWR from 'swr'
import {useSession} from "next-auth/react"

const Dashboard = () => {
  const session =useSession()
  console.log(session)
  const fetcher = (url) => fetch(url).then((r) => r.json())
  const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.typicode.com/posts',
    fetcher
  )
  // console.log(data)
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard