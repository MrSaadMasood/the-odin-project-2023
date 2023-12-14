import { useEffect, useState } from "react"

const useFetch = ( ) => {
    const [gameData, setGameData] = useState(null)
    const [loading, setIsLoading] = useState(true)
    const [error , setError] = useState(null)

    useEffect(() =>{
        const normalUrl = `https://api.rawg.io/api/games?key=7a8913f2e38a45e5a05781c7ac2021e8&page_size=40`
        fetch(normalUrl)
        .then(response => response.json())
        .then(data => {
            const game = data.results
            setGameData(game)
            setIsLoading(false)

        })
        .catch(error => setError(error))
    },[])


    return [gameData, loading, error]
}

export default useFetch