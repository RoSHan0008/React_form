import React from 'react'

const Gender = ( name ) => {
  return (
    <div>
       <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <div className='Gender'>
            <div><input type="radio" value="Male" name={name} />Male</div>
            <div><input type="radio"  value="Female" name={name}  />Female</div>
         
        </div>
        
      </div>
    </div>  
  )
}

export default Gender
