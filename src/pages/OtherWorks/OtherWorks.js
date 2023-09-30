import React from "react";
import "./OtherWorks.css";
import { BsInstagram, BsSpotify, BsYoutube } from "react-icons/bs";
import { PiGooglePodcastsLogoBold } from "react-icons/pi";
import { SiApplepodcasts } from "react-icons/si";
import { AiOutlineAmazon } from "react-icons/ai";
// import ashYtImage from "../../assets/images/ash-yt.jpg";
import ashpodimg from "../../assets/images/ash-pod.jpg";
// import ashinsta from "../../assets/images/ash-insta.png";
import youtube from "../../assets/images/yt_logo_rgb_dark.png";
import insta from "../../assets/images/instagram.png";
const OtherWorks = () => {
  return (
    <>
      <div className="otherworks">
        <h2 className="col-12 mt-3 mb-1 text-center">Hobbies</h2>
        <hr />

        <div className="row pod">
          {/* <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 otherworks-img">
            <img src={ashpodimg} alt="profile_pic" />
            <h6 mt-5>@ashbelraj</h6>
          </div> */}
          <div className="otherworks-content ">
            <h1>Podcast-Link</h1>
            <p>
              You can listen to my podcasts(Telugu language) through all the
              platforms from the given link below-
            </p>
            <div className="card m-2">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center">
                      <BsSpotify className="other-icon logos" />
                      <PiGooglePodcastsLogoBold className="other-icon" />
                      <SiApplepodcasts className="other-icon" />
                      <AiOutlineAmazon className="other-icon" />
                      {/* <div className="sudo"></div> */}
                    </div>
                    <div className="media-body">
                      <h5> </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row yt text-center">
          {/* <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 otherworks-img-yt ">
            <img src={youtube} alt="youtube-profile-pic"  />
            <h6>@ashbelraj9983</h6>
          </div> */}
          <div className=" otherworks-content ">
            <h1>Youtube-Link</h1>
            <p>Check Out my Youtube Channel</p>
            <div className="card m-2 ">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center icon-text">
                      <BsYoutube className="other-icon" />
                    </div>
                    <div className="media-body">
                      <h5> ashbelraj9983</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row insta">
          {/* <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 otherworks-img">
            <img src={insta} alt="insta-profile-pic" />
            <h6>@ashbelraj</h6>
          </div> */}
          <div className="otherworks-content ">
            <h1>Instagram-Link</h1>
            <p>Check Out my Instagram </p>
            <div className="card m-2 ">
              <div className="card-content">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <div className="align-self-center icon-text">
                      <BsInstagram className="other-icon" />
                    </div>
                    <div className="media-body">
                      <h5> ashbelraj</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherWorks;
