import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Btn from "../components/button";
import AuthContext from "../Context/authContext";
const CheckoutCard = (props) => {
  const history = useHistory()
  const { datos } = props

  return (
    <AuthContext.Consumer>{
      context => <>
        {context.login && <>
<form>
          <div className="p-5 mb-4 bg-light rounded border w-50 container m-auto mt-5 row">
          
            <div className="col">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4">Password</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputAddress">Address</label>
                  <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                  <label for="inputAddress2">Address 2</label>
                  <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2 mb-3">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <Btn size={"lg"} url={"/home/"} text={"Confirm"} />
                </div>

             
            </div>
            <div className="col text-center">
            <h3 className="fw-bold">{datos.name}</h3>
            <img alt="..." src={datos.img} className="picture my-2" style={{ width: "50%" }} />
            <h3 style={{ fontSize: "40px", fontWeight: "lighter" }} >$ {datos.price}</h3>
           
          </div> 
          
          </div>
</form>
        </>
        }
        {!context.login &&

          <div className="container m-auto mt-5">
            <h2 className="display-5">You need to login</h2>
            <button onClick={() => history.push("/login")} className="btn btn-lg lg btn-warning">Go to login</button>
          </div>

        }

      </>
    }

    </AuthContext.Consumer>
  )



}

export default CheckoutCard