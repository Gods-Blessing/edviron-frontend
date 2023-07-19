import './Left.css'
import imgheading from '../../../public/setting 1.svg'
import rightarrow from '../../../public/chevron-right 2.svg'
import d3box from '../../../public/3d-square 1.svg'
import dashboardicon from '../../../public/key-square.svg'
import studenticon from '../../../public/user-square 1.svg';
import disbursalicon from '../../../public/wallet-money 2.svg';
import discounticon from '../../../public/discount-shape 1.svg';
import helpicon from '../../../public/message-question 1.svg'

import adminprofileimage from '../../../public/Maluma-2000.jpg'

import downarrow from '../../../public/chevron-down 2.svg'





export default function Left(){
    return(
        <section className="left_section_container">
            <div className='left_section_heading'>
                <img src={imgheading} alt="" />
                <h1 className='dontdhow-below800'>Edviron<span>v.01</span></h1>
            </div>

            <ul>
                <li>
                    <div>
                        <img src={dashboardicon} alt="" />
                        <p className='dontdhow-below800'>Dashboard</p>
                    </div>
                    <img className='right-arrow' src={rightarrow} alt="" />
                </li>

                <li>
                    <div>
                        <img src={d3box} alt="" />
                        <p className='dontdhow-below800'>Fee Management</p>
                    </div>
                    <img className='right-arrow' src={rightarrow} alt="" />
                </li>

                <li>
                    <div>
                        <img src={studenticon} alt="" />
                        <p className='dontdhow-below800'>Students</p>
                    </div>
                    <img className='right-arrow' src={rightarrow} alt="" />
                </li>

                <li>
                    <div>
                        <img src={disbursalicon} alt="" />
                        <p className='dontdhow-below800'>Disbursal</p>
                    </div>
                    <img className='right-arrow' src={rightarrow} alt="" />
                </li>

                <li>
                    <div>
                        <img src={discounticon} alt="" />
                        <p className='dontdhow-below800'>Promote</p>
                    </div>
                    <img className='right-arrow' src={rightarrow} alt="" />
                </li>

                <li>
                    <div>
                        <img src={helpicon} alt="" />
                        <p className='dontdhow-below800'>Help</p>
                    </div>
                    <img className='right-arrow' src={rightarrow} alt="" />
                </li>
            </ul>

            <div className='profile_div'>
                <div>
                    <img className='admin-profile-image' src={adminprofileimage} alt="" />
                    <div>
                        <p className='dontdhow-below800 name-of-admin'>Prashant Kumar</p>
                        <p className='admin dontdhow-below800'>Super Admin</p>
                    </div>
                </div>

                <img className='dontdhow-below800' src={downarrow} alt="downarrow" />
            </div>
        </section>
    )
}