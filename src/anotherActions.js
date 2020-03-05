const API_URL =
  "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes"

export const fetchDetail = async dispatch => {
  const data = await fetch(API_URL)
  const dataJSON = await data.json()
  const payload = {
    id: dataJSON.id,
    url: dataJSON.url,
    name: dataJSON.name,
    language: dataJSON.language,
    status: dataJSON.status,
  }
  console.log(payload)
  return dispatch({
    type: "FETCH_DETAIL",
    payload,
  })
}
