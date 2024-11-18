import React from "react";

const Record = ({ item }) => {
  return (
    <>
      <div className="Record-container">
        <table className="record-table">
          <thead className="record-table-head">
            <tr>
              <th>Month</th>
              <th>Total</th>
            </tr>
          </thead>

          {item.map((d) => {
            return (
              <>
                <tbody key={d.id} className="record-table-body">
                  <tr>
                    <td>{d.fill1}</td>
                    <td>{d.amount1}</td>
                    <td>{d.fill2}</td>
                    <td>{d.amount2}</td>
                    <td>{d.total}</td>
                    <td>{d.Rs}</td>
                    <td>{d.amount1 + d.amount2}</td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Record;
