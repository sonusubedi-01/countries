import Search from './Search';
import Theme from './Theme';

function Nav(props) {

  function handleSearch(searchTerm){
    props.handleSearch(searchTerm);
  }

  return <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 mt-3">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Countries</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link" href="/">Favorites</a>
        </div>
      </div>
    </div>
    <Search handleSearch = {handleSearch} />
    <Theme/>
  </nav>
}
export default Nav;