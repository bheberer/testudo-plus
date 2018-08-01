import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const Calendar = () => {

  const days = ['', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  const hours = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM','12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
    '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ];

  const renderHeader = days.map(day =>
    <TableCell className='headerItem' key={ day }>{ day }</TableCell>
  );

  const renderRows = hours.map(hour =>
    <TableRow key={ hour }>
      <TableCell className='cell'>{ hour }</TableCell>
      <TableCell className='cell'></TableCell>
      <TableCell className='cell'></TableCell>
      <TableCell className='cell'></TableCell>
      <TableCell className='cell'></TableCell>
      <TableCell className='cell'></TableCell>
    </TableRow>
  );

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            { renderHeader }
          </TableRow>
        </TableHead>
        <TableBody>
          { renderRows }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default Calendar;