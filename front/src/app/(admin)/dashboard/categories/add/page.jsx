"use client";

import { useState } from "react";
import axios from "axios";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import bootstrap from "bootstrap";
import Alert from "$component/dashboard/Alert/Alert";
import { postData } from "api";

export default function ChangePage() {
  const [title, setTitle] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("categoryname", title);

    postData("categories", formData, setShowAlert)
  };

  return (
    <main className="main">
      {showAlert && (
        <Alert
          message="Картка була додана успішно!"
          onClose={() => setShowAlert(false)}
        />
      )}
      <div className="main__form container-lg mt-5">
        <h1 className="form-title admin-title mb-4">Додати категорію</h1>
        <form className="form needs-validation" onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">Назва:</span>
            <input
              required
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </main>
  );
}
