import React from "react"
import { myContext } from "../../provider"
import { fetchDataAction } from "../actions"
import Layout from "../components/layout"

export default function SecondPage() {
  const {
    state: { originalState },
    dispatch: { orignalDispatch },
  } = React.useContext(myContext)
  React.useEffect(() => fetchDataAction(orignalDispatch), [])
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
