function LabelInput({ htmlFor, text, type, id }) {
    return (
        <>
            <label htmlFor={htmlFor}>{text}</label>
            <input type={type} id={id} />
        </>
    )
}

export default LabelInput