import SearchBar from './SearchBar';

export default function Nav({onSearch}){
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