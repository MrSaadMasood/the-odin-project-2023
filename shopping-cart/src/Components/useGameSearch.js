
import { useEffect, useState } from "react"

const useGameSearch = ( productID ) => {
    const [specificGameData, setSpecificGameData] = useState(null)
    const [loading, setIsLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(() =>{
        const specificURL = `https://api.rawg.io/api/games/${productID}?key=7a8913f2e38a45e5a05781c7ac2021e8`
        fetch(specificURL)
        .then(response => response.json())
        .then(data => {
            setSpecificGameData(data)
            setIsLoading(false)

        })
        .catch(error => setError(error))
    },[])


    return [specificGameData, loading, error]
}

export default useGameSearch