import Image from 'next/image'
import React, {useContext, useState} from 'react'
import Style from "./HeroSection.module.css"
import images from "../../assets"
import { Token, SearchToken } from "../index"


const HeroSection = ({ accounts, tokenData }) => {

  const [openSetting, setOpenSetting] = useState(false)
  const [openToken, setOpenToken] = useState(false)
  const [openTokensTwo, setOpenTokenTwo] = useState(false)

  // token 1
  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  })
  // token 2
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  })



  return (
    <div className={Style.HeroSection}>
      <div className={Style.HeroSection_box}>
        <div className={Style.HeroSection_box_heading}>
          <p>Swap</p>
          <div className={Style.HeroSection_box_heading_img}>
            <Image src={images.close} alt={"Close"} width={50} height={50} onClick={() => setOpenSetting(true)} />
          </div>
        </div>

        <div className={Style.HeroSection_box_input}>
          <input type={"text"} placeholder={"0"} />
          <button onClick={() => setOpenToken(true)}>
            <Image src={images.image || images.etherlogo} width={20} height={20} alt={"ether"} />
            {tokenOne.name || "ETH"}
            <small>9248</small>
          </button>
        </div>
        <div className={Style.HeroSection_box_input}>
          <input type={"text"} placeholder={"0"} />
          <button onClick={() => setOpenToken(true)}>
            <Image src={tokenTwo.image || images.etherlogo} width={20} height={20} alt={"ether"} />
            {tokenTwo.name || "ETH"}
            <small>9248</small>
          </button>
        </div>

        {accounts ? (
          <button className={Style.HeroSection_box_btn}>Connect Wallet</button>
        ) : (
          <button className={Style.HeroSection_box_btn} onClick={() => {}}>Swap</button>
        )}
      </div>

      {openSetting && <Token openSetting={openSetting} />}

      {openToken && (
        <SearchToken openToken={setOpenToken} tokens={setTokenOne} tokenData={tokenData} />
      )}

      {openToken && (
        <SearchToken openToken={setOpenTokenTwo} tokens={setTokenTwo} tokenData={tokenData} />
      )}
    </div>
  )
}

export default HeroSection