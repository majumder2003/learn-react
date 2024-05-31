import PropTypes from 'prop-types'
import { useState } from 'react';

const TextForm = (props) => {
    const [text,setText] = useState()
    const [divText, setdivText] = useState();

    const handleClick = () => {
        console.log("Clicked");
        let newText = text.toUpperCase();
        // setText(newText);
        setdivText(newText);
    }
    const handleChange = (event) => {
        console.log("Changed");
        setText(event.target.value);
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">{props.title}</label>
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleChange}></textarea>
            </div>
            <div>{divText}</div>
            <button className="btn btn-success" onClick={handleClick}>Convert To Uppercase</button>
        </div>
    );
}
export default TextForm;

TextForm.propTypes = {
    title: PropTypes.string
}
TextForm.defaultProps = {
    title: 'Please set box title in props'
}