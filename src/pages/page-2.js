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
  const {
    state: { originalState },
    dispatch: { orignalDispatch },
  } = React.useContext(myContext)
  const [data, setData] = React.useState()

  React.useEffect(() => {
    fetchJson(API_URL).then(response =>
      orignalDispatch({
        type: "FETCH_DATA",
        payload: response._embedded.episodes,
      })
    )
  }, [])
  const { episodes } = originalState
  return (
    <Layout>
      <div>
        {episodes.map(episode => (
          <div>{episode.id}</div>
        ))}
      </div>
    </Layout>
  )
}
