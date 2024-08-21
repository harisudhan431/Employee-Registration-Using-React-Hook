import React from 'react'
import {useForm} from 'react-hook-form'
const Form=()=> {
    const {register,handleSubmit,formState:{errors}}=useForm();
    const onsubmit =(data)=>{

    };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
    <div>
        <div className="container mt-5">
        <p class="h1 text-center">Employee Form</p>
      <div class="row mt-4">
  <div class="col-4">
  <label for="fname" class="form-label fw-bold">FirstName</label>
    <input type="text" class="form-control" placeholder="Enter your First name" {...register('firstName',{required :'FirstName is required'})} style={{border:errors.firstName ?'1px solid red' : '1px solid blue' }}/>
    {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
  </div>
  <div class="col-4">
  <label for="mname" class="form-label fw-bold">Middle Name</label>
    <input type="text" class="form-control" placeholder=" Enter your Middle name" aria-label="Last name"/>
  </div>
  <div class="col-4">
  <label for="lname" class="form-label fw-bold">Last Name</label>
    <input type="text" class="form-control" placeholder="Enter your Last name" {...register('lastName',{required :'lastName is required'})} style={{border:errors.lastName ?'1px solid red' : '1px solid blue' }}/>
    {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
  </div>
</div>
<div className="row mt-4">
<div class="col-4">
<label for="birthdate" class="form-label fw-bold">Birth Date</label>
    <input type="date" class="form-control" placeholder="Enter your DOB"  {...register('birthDate', { required: 'Birth Date is required' })} style={{border:errors.birthDate ?'1px solid red' : '1px solid blue' }} />
    {errors.birthDate && <p style={{ color: 'red' }}>{errors.birthDate.message}</p>}
  </div>
  <div class="col-4">
  <label for="Email" class="form-label fw-bold">Email</label>
    <input type="Email" class="form-control" placeholder="Enter your Email"  {...register('email', { required: 'Email is required', pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} style={{border:errors.email ?'1px solid red' : '1px solid blue' }}/>
    {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
  </div>
  <div class="col-4">
  <label for="phno" class="form-label fw-bold">Phone Number</label>
    <input type="tel" class="form-control" placeholder="Enter your Phone Number"  {...register('phoneNumber', { required: 'Phone Number is required' })}  style={{border:errors.phoneNumber ?'1px solid red' : '1px solid blue' }}/>
    {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber.message}</p>}
  </div>
</div>
<div className="row mt-4">
<div class="col-4">
<label for="gender" class="form-label fw-bold">Select Gender</label>
<select class="form-select"  {...register('gender', { required: 'Gender is required' })} style={{border:errors.gender ?'1px solid red' : '1px solid blue' }}>
  <option value="">Select Gender</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  <option value="3">Others</option>
</select>
{errors.gender && <p style={{ color: 'red' }}>{errors.gender.message}</p>}
  </div>
  <div class="col-4">
  <label for="stime" class="form-label fw-bold">Start Time</label>
    <input type="time" class="form-control" {...register('startTime', { required: 'Start Time is required' })}  style={{border:errors.startTime ?'1px solid red' : '1px solid blue' }}/>
    {errors.startTime && <p style={{ color: 'red' }}>{errors.startTime.message}</p>}
  </div>
  <div class="col-4">
  <label for="etime" class="form-label fw-bold">End Time</label>
    <input type="time" class="form-control" {...register('endTime', { required: 'End Time is required' })}  style={{border:errors.endTime ?'1px solid red' : '1px solid blue' }}/>
    {errors.endTime && <p style={{ color: 'red' }}>{errors.endTime.message}</p>}
  </div>
</div>
<div className="row mt-4">
<div class="col-4">
<label for="job" class="form-label fw-bold">Job POsition</label>
    <input type="text" class="form-control" placeholder="Enter your Job Position" {...register('position', { required: 'Position is required' })} style={{border:errors.position ?'1px solid red' : '1px solid blue' }} />
    {errors.position && <p style={{ color: 'red' }}>{errors.position.message}</p>}
  </div>
  <div class="col-4">
  <label for="inputEmail4" class="form-label fw-bold">Select Team</label>
  <select class="form-select" {...register('team', { required: 'Team is required' })} style={{border:errors.team ?'1px solid red' : '1px solid blue' }}>
  <option value="">Select Gender</option>
  <option value="1">Team A</option>
  <option value="2">Team B</option>
  <option value="3">Team C</option>
  <option value="4">Team D</option>
  <option value="5">Team E</option>
</select>
{errors.team && <p style={{ color: 'red' }}>{errors.team.message}</p>}
  </div>
  <div class="col-4">
  <label for="inputEmail4" class="form-label fw-bold">Select Designation </label>
  <select class="form-select"  {...register('designation', { required: 'Designation is required' })} style={{border:errors.designation ?'1px solid red' : '1px solid blue' }}>
  <option value="">Choose Your Designation</option>
  <option value="1">Software Engineer</option>
  <option value="2">Tester</option>
  <option value="3">Production Manager</option>
  <option value="4">Manager</option>
  <option value="5">HR</option>
  </select>
  {errors.designation && <p style={{ color: 'red' }}>{errors.designation.message}</p>}
  </div>
</div>
<div className="row mt-4">
<div class="col-4">
  <label for="inputEmail4" class="form-label fw-bold">Billable Hours</label>
    <input type="text" class="form-control" placeholder="Enter your Billable Hours"  {...register('billableHours', { required: 'Billable Hours is required' })}  style={{border:errors.billableHours ?'1px solid red' : '1px solid blue' }}/>
    {errors.billableHours && <p style={{ color: 'red' }}>{errors.billableHours.message}</p>}
  </div>
  <div class="col-4 mt-4">
  <label for="inputEmail4" class="form-label fw-bold pe-2">Is Billable </label>
    <input type="checkbox" />
  </div>
</div>
<div class="col-12 text-center mt-4">
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
    </div>
    </div>
    </form>
  )
}

export default Form;
