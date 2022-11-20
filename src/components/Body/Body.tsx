import './Body.css';
import { FC, ReactElement } from "react";

interface BodyProps {
    element: ReactElement<any, any>
}

const Body: FC<BodyProps> = ({element}) => {
    return (
        <div className="body">
            {element}
        </div>
    );
};

export default Body;