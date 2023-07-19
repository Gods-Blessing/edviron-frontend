import './Right.css';

// image imports
import recievemoney from '../../../public/money-recive 1.svg'
import arrowup1 from '../../../public/arrow-up 1.svg';
import walletmoney from '../../../public/wallet-money 1.svg' 

import icon from '../../../public/Icon.svg'
import arrowdown from '../../../public/arrow-up 2.svg'
import BarChhart from './barchart/BarChhart';
import Piechart from './piechart/Piechart';
import pendingdisbursal from '../../../public/check_circle.svg'
import paymentsuccess from '../../../public/check_circle2.svg'


export default function Right(){

    return(
        <section className="right_section_container">
            <h1 className='school-name'>DAV Public School, Bhilai</h1>

            <div className='right_section_container_firstcontainer'>
                <div className='div-c1'>
                    <div>
                        <div className='firstttt'>
                            <img src={recievemoney} alt="" />
                        </div>

                        <div>
                            <p className='firstline'>Collection till date</p>
                            <h2>₹5.34Cr</h2>
                            <div className='profit-loss'>
                                <img src={arrowup1} alt="" />
                                <p className='p-tag'>
                                <span className='green'> 10% </span>
                                in last 30 days
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='parent-of-second'>
                        <div className='second'>
                            <img src={walletmoney} alt="" />
                        </div>

                        <div className='balance-info'>
                            <p className='firstline'>Balance</p>
                            <h2>₹2.4L</h2>
                        </div>
                    </div>

                    <div>
                        <div className='thirdd'>
                            <img src={icon} alt="" />
                        </div>

                        <div>
                            <p className='firstline'>Defaulters</p>
                            <p> <span className='larger-tirdd'>11</span> / 1,049 Students</p>
                            <div className='profit-loss'>
                                <img src={arrowdown} alt="" />
                                <p className='p-tag'>
                                <span className='green'> 10% </span>
                                in last 30 days
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --------- */}

                <div className='div-c2'>
                    <div>
                        <p className='small-font'>Students</p>
                        <p className='font-big'>1,049</p>
                    </div>

                    <div>
                        <p className='small-font'>Students</p>
                        <p><span className='font-big'>18</span> &nbsp; in 12 classes</p>
                    </div>

                    <div>
                        <p className='small-font'>Students</p>
                        <p className='font-big'>₹90.56L</p>
                    </div>

                    <div>
                        <p className='small-font'>Students</p>
                        <p className='font-big'>₹11.20L</p>
                    </div>
                </div>

                {/* ------ */}

                <div className='div-c3'>
                    <div>
                        <h4>Overview</h4>
                        <p className='small-font'>Monthly Collection</p>
                        <div className='barchart'>
                            <BarChhart/>
                        </div>
                    </div>

                    <div>
                        <h4>Payment Mode</h4>
                        <p className='small-font'>Split between Online. Cash</p>
                        <p className='small-font'>and Cheque for collection till date</p>

                        <div className='barchart'>
                            <Piechart/>
                        </div>

                        <div className='dots-div'>
                            <div>
                                <div>
                                    <div className='dot dark-blue'></div>
                                    <p>Online</p>
                                </div>
                                <p className='percentages'>64%</p>
                            </div>

                            <div>
                                <div>
                                    <div className='dot cash-dot'></div>
                                    <p>Cash</p>
                                </div>
                                <p className='percentages'>25%</p>
                            </div>

                            <div>
                                <div>
                                    <div className='dot cheque-dot'></div>
                                    <p>Cheque</p>
                                </div>
                                <p className='percentages'>11%</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='last-div-info'>
                <div className='admins-container'>
                    <div className='admin-container-heading-div'>
                        <h3>Admins</h3>
                        <div>
                            <p>Name</p>
                            <p>Role</p>
                        </div>
                    </div>

                    <div className='admin-names'>
                        <div>
                            <p>Prashant Kumar</p>
                            <p>Prashant Kumar</p>
                            <p>Prashant Kumar</p>
                            <p>Prashant Kumar</p>


                        </div>

                        <div>
                            <p>Super admin</p>
                            <p>Super admin</p>
                            <p>Super admin</p>
                            <p>Super admin</p>

                        </div>
                    </div>
                    
                </div>

                <div className='disbursal-container'>
                    <div className='disbursal-container-heading-div'>
                        <h3>Disbursals</h3>
                        <div>
                            <p>Date</p>
                            <p>Amount</p>
                            <p>Status</p>
                        </div>
                    </div>

                    <div className='disbursal-names'>
                        <div>
                            <p>July 11, 2023</p>
                            <p>July 11, 2023</p>
                            <p>July 11, 2023</p>
                            <p>July 11, 2023</p>


                        </div>

                        <div>
                            <p>₹5,03,123</p>
                            <p>₹5,03,123</p>
                            <p>₹5,03,123</p>
                            <p>₹5,03,123</p>

                        </div>

                        <div>
                            <div>
                                <img src={pendingdisbursal} alt="" />
                                <p>Pending</p>
                            </div>

                            <div>
                                <img src={paymentsuccess} alt="" />
                                <p>Successful</p>
                            </div>

                            <div>
                                <img src={paymentsuccess} alt="" />
                                <p>Successful</p>
                            </div>

                            <div>
                                <img src={paymentsuccess} alt="" />
                                <p>Successful</p>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}