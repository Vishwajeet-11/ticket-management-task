const express = require('express');
const { createTicket, getAllTickets, getTicketById, updateTicket, deleteTicket } = require('../controllers/ticketController');
const router = express.Router();

router.post('/createTickets', createTicket);
router.get('/tickets', getAllTickets);
router.get('/tickets/:id', getTicketById);
router.put('/tickets/:id', updateTicket);
router.delete('/tickets/:id', deleteTicket);

module.exports = router;
