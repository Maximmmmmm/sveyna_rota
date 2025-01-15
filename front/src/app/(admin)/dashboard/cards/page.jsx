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
	const [cards, setCards] = useState([]);
	const [selectedCardId, setSelectedCardId] = useState(null);

	useEffect(() => {
		getCards("cards", setCards);
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
							<button type="button" data-bs-dismiss="modal" onClick={() => selectedCardId && deleteDataById("cards", selectedCardId, setCards)} className="btn btn-outline-danger">Видалити</button>
						</div>
					</div>
				</div>
			</div>
			<div className="main__items items container-md mt-5">
				<div className="items__header mb-4">
					<h1 className="admin-title">Статистичні картки ({cards.length})</h1>
					<Link href="/dashboard/cards/add" type="button" className="btn btn-success">
						<span className="_plus">+</span> Додати
					</Link>
				</div>
				<div className="list-group">
					{cards.map((card) => (
						<DatabaseItem setSelectedId={setSelectedCardId} key={card.id} title={`Картка ${card.id} (${card.title})`} link={`/dashboard/cards/add/${card.id}`} id={card.id}/>
					))}
				</div>
			</div>
		</main>
	);
}