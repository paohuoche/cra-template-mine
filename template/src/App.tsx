import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.scss"
import { routes } from "./pages"

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <PagesRouter />
    </QueryClientProvider>
  )
}

function PagesRouter() {
  const router = createBrowserRouter(routes)

  // const { data: userInfo, isLoading } = useGetUserInfo()
  // const loginAction = useLoginOperation()

  return (
    // <UserContext.Provider value={{ user: userInfo?.data, isLoading, action: loginAction }}>
    <RouterProvider router={router}></RouterProvider>
    // </UserContext.Provider>
  )
}

export default App
