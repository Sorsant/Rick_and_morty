import SearchBar from '../Searchb/SearchBar.jsx';
import { NavLink,} from 'react-router-dom';
import style from './Nav.module.css'
const Nav = ({ onSearch,setAccess }) => {


    const handelLogOut = ()=>{
        setAccess(false);        
    }
    return (
        <nav className={style.navegar} >
            <div className={style.botones}>

            <NavLink to="/home" className={style.botonesAdd}><button ><img src="https://previews.dropbox.com/p/thumb/AB6e6SgBQAiWAtiy_go6GBVW4StYXX_gzQSaxQfwkN22zRcVlBFPLUhhwl1aojTvs4E-HZRkteeVOKaUPK7r9v8u4M0wenwK245JtR__NqdWDZIQ92ndarx4p196U1Iuu3JX9tAu-XTGs_asxybzsGl5n5Cq1riVcZlyghGkpYXgHhCmqe_dS2DClFe4MWMFK8vfBKO-iX7b6iLqGsu89p6mdpax30JkGEishSgM7_zgUiE1fj665Z1uGHPLFhlBb43Nps8Q96qvTnUhBHAGf7gV3_yh1o6cKOajfzdFrQ2jAu8vSOGcWEYSqlR8Cijuk_3PF4Z-gg5UZ0M5-8MiwplvueV1oMFDnsjeZF5mjQCwIDJY0Z53pCR9mTOuKkQAUcY/p.png" alt="" /></button></NavLink>
            <NavLink className={style.botonesAdd} to="/about"> <button  ><img src="https://previews.dropbox.com/p/thumb/AB6OaHw2v4Xhoy5t6ZbzFl3Vf4Gen59ZPESS66R-y-K9aNQ3b_NJSvHWCIHSs5Q0DVt1sy6e5089FjdQ73PQSETNq_hBf7SLuzFzVduG0jwOCWmIfG-ozbnvH5XmTLom4_dqkt5mR7koyXZQ7ER_GmqhUJxX4HnWkUFkNFqbkqN-dsce7MbSTp1j0d5ewxYR1UeGKtxfQb90qZkvCJJpd8qWTUdcX5sw4yd4mAON-fo3Zuo_8-ammPtJkcue5PbahLoapLqHmV-4fbHeSc-9yf9RIqxuTemLCvEBEgLNGqi8Z9eHWvPjf58-3q7K9AdFKlt3TZAvI5OpKEGr83RgmCSuBvO5Sw4VqAuJqvpGnjeKrtQ_KtY_odH-x58gUvCfGiU/p.png" alt="" /></button></NavLink>
            <NavLink className={style.botonesAdd} to="/favorite"><button><img src="https://previews.dropbox.com/p/thumb/AB7KY6Rm86EmZV6Wcq4zt0g8yVeK92LhyYrYOjq4GdA1Io2mAnwjyn2hFD44d5AMR-M8QyZBgFjYTc4RC7Sz_-hdNkGWg2w4K-gBEM9sUqlH0hMglr8jdq0bASCjmh_ANwyLjH0Zs65hMDrMsGern1vYCoTqgOEyIi2yp5miLQxgozWeQr3CyJc84Nxn54mmtYghFBLadF8QoOgGAQ7pS0d_oDIPzy_IqAX8YCM7U8VETyW2spb4CKLc2Q96i8W15_Gr7C2TumgutEn6AwGLHFENjRHUlmGz3z4dCbpNK4oVe3ponI-8SgqTBOAcIcXENX4_9tjfXeWoCn8OaDUHC8TGjEJOX0OFdMs13gaPvL3zIxJ8SGLtWVywk6VCw4KAkSI/p.png" alt="" /></button></NavLink>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button className={style.logOut}  onClick={handelLogOut} >Log Out</button>
        
        </nav>
        
        
    )
}

export default Nav;