import '../App.css';
function Country(props) {
  return <div class="card col-6 col-sm-4 col-md-3 mb-4">
      <img src={props.flagSrc} class="card-img-top img-fluid" alt=""/>
    <div class="card-body">
      <h5 class="card-title">{props.name}</h5>
      <p class="card-text">{props.shortDescription}</p>
    </div>
  </div>
}
export default Country;