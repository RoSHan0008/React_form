import React from "react";

const Dropdown = ({value, label, id, name, handler, opt,error }) => {

    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <select value={value} name={name} id={id} onChange={handler}>
                {
                    opt.map((items, index) => {
                        return <option value={(index === 0 ? "" : items)}>{items}</option>
                    })
                }
            </select>
            {error && <p style={{color : "red"}}>{error}</p>}
        </div>
    )

}

export default Dropdown