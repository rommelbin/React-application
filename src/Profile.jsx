import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CHANGE_NAME, changeName } from "./store/profile/actions";

export default function Profile() {
    const { name } = useSelector((state) => state);
    const dispatch = useDispatch()
    const [value, setValue] = useState('');

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);

    return (
        <div className="">
            <div>
                <h4>Profile</h4>
                <span>Name: </span>{<div>{name}</div>}
            </div>
            <div>
                <input type="text" value={value} onChange={handleChange} />
                <button onClick={setName}>Change name</button>
            </div>
        </div>
    );
}
