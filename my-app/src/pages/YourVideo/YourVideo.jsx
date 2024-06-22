import React from "react";
import { useSelector } from "react-redux";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import ShowVideoGrid from "../../components/ShowVideoGrid/ShowVideoGrid";

//import vid from "../../components/Video/vid.mp4";
import "./yourVideo.css";
function YourVideo() {

  

  const CurrentUser = useSelector((state) => state?.currentUserReducer);
  const vids=useSelector(state=>state.videoReducer)?.data?.filter(q=>q?.videoChanel === CurrentUser?.result?._id).reverse();
  

  // const vids = [
  //   {
  //     _id: 1,
  //     video_src: vid,
  //     Chanel: "62bafe6752cea35a6c30685f",
  //     title: "video 1",
  //     Uploder: "abc",
  //     description: "description of  video 1",
  //   },
  //   {
  //     _id: 2,
  //     video_src: vid,
  //     Chanel: "cdd",
  //     title: "video 2",
  //     Uploder: "abc",
  //     description: "description of  video 2",
  //   },
  //   {
  //     _id: 3,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploder: "abc",
  //     description: "description of  video 3",
  //   },
  //   {
  //     _id: 4,
  //     video_src: vid,
  //     Chanel: "add",
  //     title: "video 3",
  //     Uploder: "abc",
  //     description: "description of  video 3",
  //   },
  // ];
  return (
    <div className="container_Pages_App">
      <LeftSideBar />
      <div className="container2_Pages_App">
        <div className="container_yourvideo">
          <h1>Your Video</h1>
          {
            CurrentUser ?(<>
          <ShowVideoGrid vids={vids} />
            </>):<>
            <h3>Plz Login to see Your uploded video list</h3></>
          }
        </div>
      </div>
    </div>
  );
}

export default YourVideo;