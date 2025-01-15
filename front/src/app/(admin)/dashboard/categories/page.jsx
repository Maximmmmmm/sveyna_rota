'use client';

import bootstrap from "bootstrap"
import '$style/bootstrap.min.css'
import "$style/admin/Admin.css"
import Image from 'next/image';
import Link from "next/link";
import DatabaseItem from "$component/dashboard/DatabaseItem/DatabaseItem";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import getCards, { deleteDataById } from "api";

export default function CardsPage() {
	const [categories, setCategories] = useState([]);
	const [selectedCardId, setSelectedCardId] = useState(null);

	useEffect(() => {
		getCards("categories", setCategories);
	}, []);

	return (
		<main className="main">
			<div className="modal fade" id="deleteApprove" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Підтвердження дії</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Картка буде повністю видалена!
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Відмінити</button>
							<button type="button" data-bs-dismiss="modal" onClick={() => selectedCardId && deleteDataById("categories", selectedCardId, setCategories)} className="btn btn-outline-danger">Видалити</button>
						</div>
					</div>
				</div>
			</div>
			<div className="main__items items container-md mt-5">
				<div className="items__header mb-4">
					<h1 className="admin-title">Категорії ({categories.length})</h1>
					<Link href="/dashboard/categories/add" type="button" className="btn btn-success">
						<span className="_plus">+</span> Додати
					</Link>
				</div>
				<div className="list-group">
					{categories.map((categorie, index) => (
						<DatabaseItem setSelectedId={setSelectedCardId} key={categorie.id} title={`Категорія ${index + 1} (${categorie.categoryname})`} link={`/dashboard/cards/add/${categorie.id}`} id={categorie.id}/>
					))}
				</div>
			</div>
		</main>
	);
}