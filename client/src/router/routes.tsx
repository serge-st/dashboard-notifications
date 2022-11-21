import { ReactElement } from "react"
import Body from "../components/Body/Body";
import Loader from "../components/Loader/Loader";
import Clients from "../pages/Clients/Clients";
import Notifications from "../pages/Notifications/Notifications";

interface AppRoute {
    path: string
    element: ReactElement<any, any>
}

export const appRoutes: AppRoute[] = [
    { path: '/', element: <Body element={<div>Main Page</div>} />},
    { path: '/orders', element: <Body element={<Loader />} />},
    { path: '/statistics', element: <Body element={<Loader />} />},
    { path: '/notifications', element: <Body element={<Notifications />} /> },
    { path: '/clients', element: <Body element={<Clients />} /> },
];