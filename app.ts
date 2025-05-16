// app.ts
import express from 'express';
import { TicketController } from './controllers/ticket.controller';

const app = express();
app.use(express.json());

const ticketController = new TicketController();

app.post('/tickets', ticketController.createTicket);
app.patch('/tickets/:id/start', ticketController.startTicket);
app.patch('/tickets/:id/complete', ticketController.completeTicket);
app.patch('/tickets/:id/cancel', ticketController.cancelTicket);
app.get('/tickets', ticketController.getTickets);
app.post('/tickets/cancel-all-in-progress', ticketController.cancelAllInProgress);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
