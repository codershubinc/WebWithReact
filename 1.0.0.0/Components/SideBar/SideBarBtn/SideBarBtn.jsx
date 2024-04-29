import React, { useEffect } from 'react'
import { useState } from 'react'
function SideBarBtn() {
const [visible,setVisible] = useState(false)
const [hanBergerSrc,setHanBergerSrc] = useState("https://cdn-icons-png.flaticon.com/512/8777/8777583.png")
  useEffect(() => {
    if (visible === true) {
      document.getElementsByClassName("sideBar")[0].style.width = "300px"
      document.getElementsByClassName("sideBar")[0].style.visibility = "visible"
      setHanBergerSrc("https://cdn-icons-png.flaticon.com/512/8777/8777583.png")
    }else{
      document.getElementsByClassName("sideBar")[0].style.width = "0px"
      document.getElementsByClassName("sideBar")[0].style.visibility = "hidden"
      setHanBergerSrc("https://cdn-icons-png.flaticon.com/512/2311/2311524.png")
    }
  }, [visible])

  return (
    <img src={hanBergerSrc} className='dark:invert  h-[30px] transition-all  cursor-pointer   ' onClick={() => setVisible(!visible)} alt="" />
  )
}

export default SideBarBtn
