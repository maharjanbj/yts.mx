import { Route, Routes } from "react-router-dom"
import { PRIMARY_ROUTES } from "./routes"

export const PrimaryRoute = () => {
    return <Routes>
        {PRIMARY_ROUTES.map((v,key)=>(
            <Route path={v.path} element={v.element} key={key} />
        ))}
    </Routes>
}