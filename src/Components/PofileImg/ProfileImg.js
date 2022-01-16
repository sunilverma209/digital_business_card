import React from "react";
import profileImg from '../../sv.jpg';
function ProfileImg(){
    return(
        <div className="d-flex">
            <img src={profileImg} alt="Sunil Verma" />
      </div>
    )
}

export default ProfileImg;