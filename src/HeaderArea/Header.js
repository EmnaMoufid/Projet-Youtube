import React from 'react'
import './HeaderArea.css'
import { FaYoutube } from 'react-icons/fa'
import { MdSearch, MdVideoCall, MdViewComfy } from 'react-icons/md'
import { AiTwotoneBell } from 'react-icons/ai'
function HeaderArea() {
    return (

        <div className="HeaderArea">
            <div className="Header">
                <header className="header">
                    <button className="button">
                        &#9776;
                    </button>
                    <FaYoutube color="red" fontSize="3rem" />
                    <div> YouTube </div>
                </header>
                <div className="Search">
                    <input type="search" placeholder="search" />
                    <div className="search">
                        <MdSearch fontSize="3rem" />
                    </div>
                </div>
                <div className="Icon">
                    <div className="icon"><MdVideoCall fontSize="2.8rem" /> </div>
                    <div className="icon"><MdViewComfy fontSize="2.8rem" /> </div>
                    <div className="icon"><AiTwotoneBell fontSize="2.8rem" /> </div>
                    <div className="icon">
                        <img src="/images/emna.jpg" alt="emna" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default HeaderArea