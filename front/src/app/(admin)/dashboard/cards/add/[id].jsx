"use client";

import { useState } from "react";
import axios from "axios";
import "$style/bootstrap.min.css";
import "$style/admin/Admin.css";
import bootstrap from "bootstrap";
import Alert from "$component/dashboard/Alert/Alert";

export default function ChangePage() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const [showAlert, setShowAlert] = useState(false);

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();

	// 	if (!file) {
	// 		alert("Пожалуйста, выберите файл");
	// 		return;
	// 	}

	// 	const formData = new FormData();
	// 	formData.append("title", title);
	// 	formData.append("description", description);
	// 	formData.append("path", file);

	// 	try {
	// 		await axios.post("http://localhost:3000/cards", formData, {
	// 			headers: { "Content-Type": "multipart/form-data" },
	// 		});
	// 		setShowAlert(true);
	// 		setTimeout(() => setShowAlert(false), 3000);
	// 	} catch (error) {
	// 		console.error("Ошибка при отправке данных:", error);
	// 		alert("Ошибка при отправке данных.");
	// 	}
	// };
	

	return (
		<main className="main">
			{showAlert && (
				<Alert
					message="Карточка була додана успішно!"
					onClose={() => setShowAlert(false)}
				/>
			)}
			<div className="main__form container-lg mt-5">
				<h1 className="form-title admin-title mb-4">Додати статистичну картку</h1>
				<form className="form needs-validation" onSubmit={handleSubmit}>
					<div className="input-group mb-3">
						<input
							required
							type="file"
							className="form-control"
							id="inputGroupFile02"
							onChange={(e) => setFile(e.target.files[0])}
							accept="image/*"
						/>
						<label className="input-group-text" htmlFor="inputGroupFile02">Зображення</label>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Заголовок:</span>
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
					<div className="input-group mb-3">
						<span className="input-group-text" id="inputGroup-sizing-default">Значення:</span>
						<input
							required
							type="text"
							className="form-control"
							aria-label="Sizing example input"
							aria-describedby="inputGroup-sizing-default"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary">Save</button>
				</form>
			</div>
		</main>
	);
}
