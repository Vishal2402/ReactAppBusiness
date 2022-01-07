import React, { useState } from 'react';

const Contact = () => {

  const [data, setData] = useState({
    fullname: '', contact: '' , email: "", message: ""
  }
  );
  const formhandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const showdata = (e)=>{
e.preventDefault();
 alert(`Dear  ${data.fullname}  "Your request has been submitted. You will get reply soon from the managment department.`) 
return setData({
  fullname: '', contact:'' , email: "", message: ""
});
  
  }

  return (
    <>
      <div className="my-5 mx-auto">
        <h1 className='text-center'> Welcome</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form action='mailto:upadhyayjay36@gmail.com' onSubmit={showdata}>

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input required type="text" name='fullname' onChange={formhandler} value={data.fullname} className="form-control" id="" placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input required type="number" name='contact' onChange={formhandler} value={data.phone} className="form-control" id="" placeholder="Enter Your Contact No" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input required type="email" name='email' onChange={formhandler} value={data.email} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" name='message' onChange={formhandler} value={data.message} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;