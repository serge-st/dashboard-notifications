import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { appRoutes } from "../router/routes";

const AppRouter: FC = () => {
    return (
        <Routes>
            {appRoutes.map(route => 
                <Route
                    key={route.path}
                    path={route.path}
                    element={route.element}
                />    
            )}
        </Routes>
    );
}
export default AppRouter;