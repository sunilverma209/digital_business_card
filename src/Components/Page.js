import React from "react";
import About from "./About/About";
import BasicInfo from "./BasicInfo/BasicInfo";
import ProfileImg from "./PofileImg/ProfileImg";
import Social from "./Social/Social";


function Page(){
    return(
        <section className="home_banner_area">
          <div className="container box_1620">
            <div className="banner_inner d-flex align-items-center">
              <div className="banner_content">
                <div className="media">
                    <ProfileImg/>
                  <div className="media-body">
                    <div className="personal_text">
                      <About/> 
                      <BasicInfo />
                      <Social />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Page;