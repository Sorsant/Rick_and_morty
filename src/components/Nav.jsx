import SearchBar from './SearchBar';

 const Nav=(onSearch)=>{
return(
    
  <div>
    <nav>
        {
            <SearchBar onSearch={onSearch} />
        }
    </nav>
  </div>
    
    )
    
}
export default Nav;