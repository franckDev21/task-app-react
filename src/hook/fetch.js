import {useEffect, useState} from "react"

export function useFetch(url){

  const [state,setState] = useState({
    data : [],
    loading : true
  })

  useEffect(()=>{
    (async function(){
      const response = await fetch(url)
      const responseDate = await response.json()
      if (response.ok){
        setState({
          data : responseDate,
          loading : false
        })
      }else {
        setState({...state,loading: false})
      }
    })()
  },[])

  return [
    state.data,
    state.loading
  ]
}