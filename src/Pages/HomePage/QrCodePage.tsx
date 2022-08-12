import React, { useState } from 'react'
import './QrPage.css'
import { ImCross } from "react-icons/im";
import { FiShare } from "react-icons/fi";
import {Link} from 'react-router-dom'
import { Avatar } from 'web3uikit'
import QRCode from "react-qr-code";

type Props = {}

const QrCodePage = (props: Props) => {

    const [active,setActive] = useState(false);
  return (
    <div className='container'>
        <div className='topBar'>
                 <Link to='/'>
                <div className='goBack'><ImCross/></div>
                </Link>   
                <div className='buttonHolder'>
                    <div className={'qrButtonLeft ' + (active? 'active':'inActive')} onClick={()=>setActive(!active)} >My Code</div>
                    <div className={'qrButtonRight ' + (active? 'inActive':'active')} onClick={()=>setActive(!active)} >Scan</div>
                </div>
                   
                <div className='share'><FiShare/></div>
           
        </div>
        <div className={'mainContent '+ (active? 'myInfoInActive':'myInfoActive')}>
            <div className='contentWrapper'>
                <div className='infoHolder'>
                <div><Avatar text='Tanishq' theme="letters" isRounded fontSize={35} size={70}/></div>
                <div>Tanishq</div>
                <div>+91 9999315898</div>
                </div>
                <div className='QrHolder'>
                    <div className='QrWrapper'>
                    <QRCode value={'0x849bf7D53dc8614476F00600791F5C3C8b68A51B'} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QrCodePage