import '../App.css';
function Country(props) {
  return <div className="card col-10 col-sm-4 col-md-2 mb-4">
      <img src={props.flagSrc} className="card-img-top img-fluid" alt=""/>
    <div className="card-body">
      <h5 className="card-title">{props.name}</h5>
      <p className="card-text">{props.shortDescription}</p>
    </div>
  </div>
}
export default Country;