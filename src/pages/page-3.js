import React from "react"
import { myContext } from "../../provider"
import { fetchDetail } from "../anotherActions"
import Layout from "../components/layout"
export default function SecondPage() {
  const { state, dispatch } = React.useContext(myContext)
  React.useEffect(() => fetchDetail(dispatch.basicDetailDispatch), [])
  const { id, url, language, status, name } = state.basicStateDetail
  return (
    <Layout>
      <div>{id}</div>
      <div>{name}</div>
      <div>{url}</div>
      <div>{language}</div>
      <div>{status}</div>
    </Layout>
  )
}
