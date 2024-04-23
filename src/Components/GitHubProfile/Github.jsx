import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Github() {
  const [data, setData] = useState({});
  const id = useParams()
  useEffect(() => {
    if (id) {


      fetch("https://api.github.com/users/" + id.id)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });

    }
  }, []);
  return (
    <div className="bg-black h-[100vh] text-white  " >
      <div className="flex justify-center text-center  ">
        <h1 className="text-3xl text-center  " >GitHub profile </h1>
      </div>
      <div className="m-2 " >
        <div className=" flex justify-center text-center w-min-[10vw]  w-max  items-center p-2 border-2 border-solid border-white rounded-xl bg-[#212121] transition-all shadow-inner shadow-white" >

          {/*          here is the image  and the name */}
          <div className="m-2">
            <img src={data.avatar_url ? data.avatar_url : ""} className="  h-60 w-60 rounded-[50%] border-2 border-solid border-gray-500" alt="" />
            <h1 className="text-xl"  >{(data.login ? data.login : "gitHub Login error")}</h1>
          </div>



          <div>
            <h1>{"Followers are " + (data.followers ? data.followers : "0")}</h1>
            {/* here is social media links */}
            <div>
                <a href={data.html_url} target="_blank" >
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111425.png" className="invert h-[30px]  " alt="" />
            </a>
            </div>
          
          </div>
        </div>
      </div>


    </div>
  );
}

export default Github;
