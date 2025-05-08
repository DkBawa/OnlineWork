import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import Navbar from '../component/layout/Navbar';
import Footer from '../component/Footer';

const MyTickets = () => {
  const tickets = [
    {
      id: 'TCKT12345',
      lotteryName: 'Mega Jackpot',
      date: '2025-04-14',
      status: 'Pending',
    },
    {
      id: 'TCKT67890',
      lotteryName: 'Super Draw',
      date: '2025-04-10',
      status: 'Won',
    },
  ];

  return (
    <>
      <Navbar />
      <div className="text-center py-5 mt-5" style={{ background: 'linear-gradient(to right, #FBD3E9, #BB377D)' }}>
        <h2 className="fw-bold text-white">My Tickets</h2>
        <p className="text-light">Home &gt; My Tickets</p>
      </div>
      <Container className="my-5">
        <Table striped bordered hover responsive className="shadow-sm">
          <thead className="table-success">
            <tr>
              <th>#</th>
              <th>Ticket ID</th>
              <th>Lottery Name</th>
              <th>Date</th>
              <th>Status</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={ticket.id}>
                <td>{index + 1}</td>
                <td>{ticket.id}</td>
                <td>{ticket.lotteryName}</td>
                <td>{ticket.date}</td>
                <td>{ticket.status}</td>
                <td>
                  <Button variant="info" size="sm">PDF</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </>
  );
};

export default MyTickets;
