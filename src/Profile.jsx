import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import toggleShowName from "./store/profile/actions";

export default function Profile() {
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch()
    const setShowName = useCallback(() => {
        dispatch(toggleShowName)
    }, [dispatch]);
    return (
        <div className="">
            <div>
                <h4>Profile</h4>
                 <span>Name: </span>{showName && <div>{name}</div>}
            </div>
            <div>
                <input
                    type="checkbox"
                    checked={showName}
                    value={showName}
                    onChange={setShowName}
                />
                <span>Show Name</span>
            </div>
        </div>
    );
}
