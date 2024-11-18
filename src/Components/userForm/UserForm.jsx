import React from "react";
import "./UserForm.css";

const UserForm = ({ item }) => {
  return (
    <>
      {/* ------------------Main Container--------------- */}
      <div className="main-userForm-container">
        {/* ----------------------Left Container--------------- */}
        <div className="userForm-content-container-1">
          {/* ---------------------------Form Container----------------- */}
          <form action="">
            {/* ---------------------Date Input----------------- */}
            <div className="ucc-1 box-1">Date</div>

            {/* ----------------------Item-1 Container--------------- */}
            <div className="ucc-1 box-2">
              <div className="item-box-input">
                <legend>Item 1</legend>
                <input
                  type="text"
                  name="data1"
                  id="item1"
                  placeholder="Fill data"
                />
              </div>

              <div className="item-box-input">
                <legend>Amount Spend</legend>
                <input
                  type="number"
                  name="amount1"
                  id="amount1"
                  placeholder="Amount in Rs."
                />
              </div>
            </div>

            {/* --------------------Item-2 Container------------- */}
            <div className="ucc-1 box-3">
              <div className="item-box-input">
                <legend>Item 2</legend>
                <input
                  type="text"
                  name="data2"
                  id="item2"
                  placeholder="Fill data"
                />
              </div>
              <div className="item-box-input">
                <legend>Amount Spend</legend>
                <input
                  type="number"
                  name="amount2"
                  id="amount2"
                  placeholder="Amount in Rs."
                />
              </div>
            </div>

            {/* -----------------Total Amount Container---------------- */}
            <div className="ucc-1 box-4">
              <div className="item-box-input">
                <input
                  type="text"
                  name="total"
                  id="total"
                  placeholder="Total amount in Rs."
                />
              </div>
              <div className="item-box-input">
                <input
                  type="number"
                  name="total-rs"
                  id="total-rs"
                  placeholder="Rs."
                />
              </div>
            </div>

            {/* --------------------------Button Container------------------- */}
            <div className="ucc-1 box-5">
              <button className="btnn btn-add-more">Add More</button>
              <button className="btnn btn-done">Done</button>
            </div>
          </form>
        </div>

        {/* ---------------------------Right Container----------- */}
        {/* ---------------------------------------------------------- */}
        <div className="userForm-content-container-2">
          <table className="userForm-right-table">
            <thead className="urt-head">
              <tr className="uth-row">
                <th>Month</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody className="urt-body">
              <tr className="utb-row">
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserForm;
