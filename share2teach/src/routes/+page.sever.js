import { error } from '@sveltejs/kit';
import { FAQDAO } from '$lib/DAOClasses/FAQDAO';


export function load({ params }) {
	const faqDAO = new FAQDAO();
    faqDAO.connect();
    console.log(faqDAO.getAllFAQs())

	return {
		
	};
}