import "./Users.css";
import User from "./User.js";
import React from 'react';


const Users = (param) => {
 let pagesCount = Math.ceil(param.totalCount / param.pageSize);
         let pages =[]
         for(let i = 1; i <= pagesCount; i++){
             pages.push(i)
         }

 let onRight = () => {
    if(param.rightLimit<pagesCount){param.changePages(20);}
    else{ param.changePage(pagesCount-param.rightLimit)}
 }

 let onLeft = () => {
    param.changePages(-20);
 }

 return <div className='users'>
        {param.users.map(el =>(<User avatar={el.photos.small} status={el.status} name={el.name}
        friend={el.followed} id={el.id} {...param} key = {el.id}/>))}
        <div className="pages">
        {(param.leftLimit === 1) ? "" : <button onClick={onLeft}>{"<"}</button>}
        {pages.filter( p => (p>=param.leftLimit && p<=param.rightLimit)).map(p => {
            return <span className={param.currentPage === p && "selected"} onClick={(e) => { param.onPageChanged(p); } }>{p}</span>
        }
        )}
        {(param.rightLimit > pagesCount) ? "" : <button onClick={onRight}>{">"}</button>}
        </div>
        </div>

}

export default Users;
