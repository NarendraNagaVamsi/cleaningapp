<template>
    <div class="container rounded   background">
     <h1 class="text-center mb-4 form-label">Get a Free Estimate</h1>
     <h3 class="text-center mb-5 form-label">Contact us</h3>
      <form>
        <div class="row gx-3 gy-3">
     
          <div class="col-md-4">
            <label for="firstName" class="form-label">First Name*</label>
            <input type="text" class="form-control" id="firstName"  />
          </div>
          <div class="col-md-4">
            <label for="lastName" class="form-label">Last Name*</label>
            <input type="text" class="form-control" id="lastName"  />
          </div>
          <div class="col-md-4">
            <label for="email" class="form-label">Email*</label>
            <input type="email" class="form-control" id="email" />
          </div>
  
          
          <div class="col-md-4">
            <label for="phoneNumber" class="form-label">Phone Number*</label>
            <input type="text" class="form-control" id="phoneNumber" />
          </div>
          <div class="col-md-4">
            <label for="address" class="form-label">Address*</label>
            <input type="text" class="form-control" id="address" />
          </div>
          <div class="col-md-4">
            <label for="city" class="form-label">City*</label>
            <input type="text" class="form-control" id="city"  />
          </div>
  
         
          <div class="col-md-4">
            <label for="rooms" class="form-label">Number of Rooms*</label>
            <select class="form-select" id="rooms">
              <option value="" disabled selected></option>
              <option value="cleaning">2 bedroom</option>
              <option value="deep-cleaning">3 bedroom</option>
              <option value="sanitization"> 4 bedroom</option>
            </select>
          </div>
          
          <div class="col-md-8">
            <label for="service" class="form-label">Choose Your Service*</label>
            <select class="form-select" id="service">
              <option value="" disabled selected></option>
              <option value="cleaning">Cleaning</option>
              <option value="deep-cleaning">Deep Cleaning</option>
              <option value="sanitization">Sanitization</option>
            </select>
          </div>
          <div class="col-md-4 d-flex align-items-center  m-auto mt-4 rounded-5 ">
            <button type="submit" class="btn btn-primary w-100">Get a Quote</button>
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
  }
  .form-label {
    font-weight: bold;
  }
  .background{
    background-color: #FFF9AF;
    padding: 40px;
   
}
  </style>
  