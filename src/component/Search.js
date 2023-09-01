
function Search(props) {

    function handleSearch(event){
        props.handleSearch(event.target.value.toLowerCase());
    }

    return <form class="d-flex">
        <input class="form-control me-2" type="search" onChange = {handleSearch} placeholder="Search" aria-label="Search" />
    </form>
}

export default Search;