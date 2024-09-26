import React, {useContext} from 'react'
import { useQuery } from '@tanstack/react-query'
import { CreateContext } from '../Context/Context'

const loadData = () => {
  const setIsLoading = useContext(CreateContext).loader
  const {data: facts, isLoading, error} = useQuery({
    queryKey: ["fact"],
    queryFn: fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
  })

  console.log(facts);
  setIsLoading(isLoading)
  return (
    <div>loadData</div>
  )
}

export default loadData