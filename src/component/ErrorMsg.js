function ErrorMsg(props) {
    return <div class="alert alert-danger" role="alert">
        {props.message}
    </div>
}
export default ErrorMsg;