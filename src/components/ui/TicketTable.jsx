import React, { useState } from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper,
  TablePagination,
  useMediaQuery,
  useTheme
} from '@mui/material';
import PriorityTag from './PriorityTag';
import { useNavigate } from 'react-router-dom';

export default function TicketTable({ tickets }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleRowClick = (ticketId) => {
    navigate(`/tickets/${ticketId}`);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size={isMobile ? 'small' : 'medium'}>
          <TableHead>
            <TableRow>
              <TableCell>Ticket No.</TableCell>
              <TableCell>Subject</TableCell>
              {!isMobile && <TableCell>Status</TableCell>}
              {!isMobile && <TableCell>Support By</TableCell>}
              <TableCell>Date</TableCell>
              {!isMobile && <TableCell>Rating</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {tickets
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((ticket) => (
                <TableRow 
                  key={ticket.id}
                  hover
                  onClick={() => handleRowClick(ticket.id)}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell>{ticket.id}</TableCell>
                  <TableCell>{ticket.subject}</TableCell>
                  {!isMobile && (
                    <TableCell>
                      <PriorityTag status={ticket.status} />
                    </TableCell>
                  )}
                  {!isMobile && <TableCell>{ticket.supportBy}</TableCell>}
                  <TableCell>{ticket.date}</TableCell>
                  {!isMobile && <TableCell>{'★'.repeat(ticket.rating)}</TableCell>}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={tickets.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        labelRowsPerPage={isMobile ? '' : 'Rows per page:'}
        labelDisplayedRows={({ from, to, count }) => 
          isMobile ? `${from}-${to} of ${count}` : `Showing ${from}-${to} of ${count} entries`
        }
      />
    </>
  );
}