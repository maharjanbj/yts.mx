import { GetRequest } from "../../../plugins/http"

export const APImovieDetails = (id) => {
    return GetRequest('movie_suggestions.json?movie_id='+id);
}
export const APImovieDetailsSuggestions = (id) => {
    return GetRequest('movie_suggestions.json?movie_id='+id);
}