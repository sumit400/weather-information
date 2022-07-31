const Student = (props) => {

    return (
        <>
            <p><input className="p-2 bg-danger text-white" type="button" value="x" onClick={props.del} /></p>

        </>
    )
}

export default Student;