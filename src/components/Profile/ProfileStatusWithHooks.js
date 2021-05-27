import "./ProfileStatus.css";
import {getStatus} from "./../../api/api.js"
import React,{useState, useEffect} from "react";


const ProfileStatusWithHooks = React.memo(param =>{

        let [editMode,setEditMode] = useState(false);
        let [status,setStatus] = useState(param.status);

        useEffect(() => {
            setStatus(param.status)
        }, [param.status])

         const activateEditMode = () => {
            if(param.isOwner){
            setEditMode(true);
            }
         }

         const deactivateEditMode = () => {
            setEditMode(false);
            param.updateStatusFull(status);
         }

         const onStatusChange = (e) => {
             setStatus(e.currentTarget.value)
         }

        return (
           <div className="status">
                {!editMode ?
                <div><span onDoubleClick={activateEditMode}>status: {status ? status : "no status"}</span></div>
                :
                <div>status: <textarea onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></textarea></div>
                }
           </div>
        )
});

export default ProfileStatusWithHooks;