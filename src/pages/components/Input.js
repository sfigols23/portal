const Input = (props) => {
    return(
        <div className="p-2">
            <label className="px-2">
                {props.label}
            </label>
            <input type={props.type} required={props.required} placeholder={props.placeholder} className="rounded"/>
        </div>
    )
}

export default Input;