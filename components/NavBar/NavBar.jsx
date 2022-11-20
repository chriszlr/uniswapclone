import React, { useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'


import Style from "./NavBar.module.css"
import images from "../../assets"
import {Model, TokenList} from "../index"




const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/"
    },
    {
      name: "Tokens",
      link: "/"
    },
    {
      name: "Pools",
      link: "/"
    }
  ]

  const [openModel, setopenModel] = useState(false)
  const [openTokenBox, setOpenTokenBox] = useState(false)


  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* logo image */}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt={"logo"} width={50} height={50} />
          </div>

          {/* menu items */}

          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
              key={i+1}
              href={{pathname: `${el.name}`, query: `${el.link}`}}
              >
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* middle section */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_image}>
              <Image src={images.search} alt={"Search"} width={20} height={20} />
            </div>
            {/* input section */}
            <input type={"text"} placeholder={"Search Token"} />
          </div>
        </div>
        {/* right section */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_img}>
              <Image src={images.ether} alt={"Network"} height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>
          <button onClick={() => setopenModel(true)}>Address</button>

          {openModel && (
            <Model setopenModel={setopenModel} connectWallet="Connect" />
          )}
        </div>
      </div>
      {/* tokenlist component */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  )
}

export default NavBar