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

            <NavLink to="/home" className={style.botonesAdd}><button ><img src="https://previews.dropbox.com/p/thumb/AB4ass1RTiKZngDvZYz9s74QlkybkJcZZ2XEWofCVX3Tp1IEnJDXvN1PAHxhTp9akThHiAAyEMBaXCgc_3W2n0PWynvUirYg5MAg1IbBeara3MPwckrdN_0BOB7-dna399SSOs3ADQcfPDvm3UUCmMKiNYAn_GButyPcpWnOKfQWjH2Axtfze7D3B4omEYOe8BB_qsXl565F9qsUBzF_TV394sU3yv-QUTkvWXLTPuWlUN2UGOlOciWtwEEvywPkDD5ZKsBxgjh0gCj7S4tQoG2_sZvNBXnoZfnMuJvTEij7fJtg0ADyaz9-oXmPFyE7MDeYI_S2Yal6JRSu8UAfDVxfakzw8d3mNiDEzKWe1Fr7iEEmMCmsBd5JPKFZ3RQp0hg/p.png" alt="" /></button></NavLink>
            <NavLink className={style.botonesAdd} to="/about"> <button  ><img src="https://previews.dropbox.com/p/thumb/AB4t5MEoFSlGSKJCJV_gFYAB_X7XU-62F3IfYKP8CEArVkCNSXdUpaHsCAwcI4Zb3k855cIQvcfGj-bTon3uXX6N6yZwSEkXK5kc2qjiGlZNIq7k_B9SIL4RkoMK22ldD7iZgbXv3cJvpxzAqhP_RzOUzICMuR1EHTxfOqZnEFLlx3nMqYSgVRbVq9p6nD4JFLliCBSRYGStEYPjvTa-Zz8sSI4G8K2UEGMlyHFySacpy5BPfPEJ86ChWDO5UW1q7oBXqX_wo9xXuNmPHPUv4zf2zN8IlSIAG8f0Y84N7-TXGYoHSkSLw49n-pUB9UfEu7Na5TpCXuUcDvb02kjbFz0BCuYFhL1mQ8P3qEbmAsxqGoCgDH3Fz7N5Yahei2U-amg/p.png" alt="" /></button></NavLink>
            <NavLink className={style.botonesAdd} to="/favorite"><button><img src="https://previews.dropbox.com/p/thumb/AB70gDCL6xYKgeC9gcUvS5u-k01Tw1gPSAK98_MSVSsPuRIeWjoXYXu3pH0lI5t1TTV4bhAg75fWwslPsR5wipGUPdzwST79QNzjkIcXvZutatcWpvUX3DlkaeEzpVLz1ip07oKZn7DcOby1FWm6eYPfXJyWSxyQ-XYKMxm4HC2Gec2iQnFRUydpezoJVD8-UK_NqnJIW1IlN1AuGIPcbB501OKKOWreB_-ZS3GB79MhcDs2fEDdnbhH80gVu3nFAZdWR1OEqVdoyO_wf50dcQkCdXhTvtYrcu0OnRbF9w0ucKkj8Q0VSGsve322G98uB_K7VBGjd4MTSAQ2TbaSfpioNpaJIpV_6LRbDlI7dAW0wsjx1fNWvqOMus9hb-8O0n4/p.png" alt="" /></button></NavLink>
            </div>
            <SearchBar onSearch={onSearch}/>
            <button className={style.logOut}  onClick={handelLogOut} >Log Out</button>
        
        </nav>
        
        
    )
}

export default Nav;