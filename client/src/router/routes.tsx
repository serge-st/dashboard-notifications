import { ReactElement } from "react"
import Body from "../components/Body/Body";
import Clients from "../pages/Clients";
import Notifications from "../pages/Notifications";

interface AppRoute {
    path: string
    element: ReactElement<any, any>
}

export const appRoutes: AppRoute[] = [
    { path: '/', element: <Body element={<div>Main Page</div>} />},
    { path: '/notifications', element: <Body element={<Notifications />} /> },
    { path: '/clients', element: <Body element={<Clients />} /> },
];