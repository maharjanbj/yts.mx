import { useParams } from "react-router-dom"

export const Search = () => {
    const {keyword} = useParams()
    return <div>Search {keyword}</div>
}