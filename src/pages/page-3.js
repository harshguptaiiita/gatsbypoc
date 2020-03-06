import React from "react"
import { myContext } from "../../provider"
import Layout from "../components/layout"
const API_URL =
  "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"

const fetchJson = async url => {
  const response = await fetch(url)
  return response.json()
}
export default function SecondPage() {
  const { state, dispatch } = React.useContext(myContext)
  React.useEffect(() => {
    fetchJson(API_URL).then(response => {
      const payload = {
        id: response.id,
        url: response.url,
        name: response.name,
        language: response.language,
        status: response.status,
      }
      dispatch.basicDetailDispatch({
        type: "FETCH_DETAIL",
        payload: payload,
      })
    })
  }, [])
  console.log(state)
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
