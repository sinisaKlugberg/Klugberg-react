import React, { useState } from 'react'

export default function Form({ handler, isLoading, isSent, hasError }){
    const [formState, setFormState] = useState({})
  
    const handleFieldChange = (field, e) => {
      setFormState({
        ...formState,
        [field]: e.target.value,
      })
    }
  
    const handleFormSubmit = (e) => {
      handler(e, formState)
    }
    return(
      <form onSubmit={handleFormSubmit} className="contact_form">
        <div className="ptf-form-group">
          <label data-number="01">Kako se zovete?</label>
          <input onChange={(e) => handleFieldChange("your-name", e)} type="text" />
        </div>

        <div className="ptf-form-group">
          <label data-number="02">Unesite ime kompanije.</label>
          <input onChange={(e) => handleFieldChange("organizacija", e)} type="text" />
        </div>

        <div className="ptf-form-group">
          <label data-number="03">Unesite E-mail?</label>
          <input onChange={(e) => handleFieldChange("your-email", e)} type="email" />
        </div>

        <div className="ptf-form-group">
          <label data-number="04">Recite nam nešto više o projektu.</label>
          <textarea onChange={(e) => handleFieldChange("your-message", e)} type="text" name="projectGoal" />
        </div>
        {/* End .ptf-form-group */}

        {/* <!--Spacer--> */}
        <div className="ptf-spacer" style={{ "--ptf-xxl": "5.625rem" }}></div>
        {/* Send Button */}
        <input type="submit" value="Send" className="ptf-submit-button" />
      </form>
    )
}