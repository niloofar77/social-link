import React from "react";
import "./CardUser.css";
import { Form } from "./Form";
import { useState } from "react";
export const CardUser = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  return (
    <div className="card">
      <div className="card-content">
        <h3>مسیر های ارتباطی</h3>
        <button onClick={toggleForm} className="add-button">
          + افزودن مسیر ارتباطی
        </button>
        {isFormOpen && (
          <form className="communication-form">
            <div className="menu">
              <Form></Form>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
export default CardUser;
