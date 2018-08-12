import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { shouldUpdate } from 'recompose';
import { days, hours } from '../constants';

const Calendar = () => {

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

export default shouldUpdate(() => false)(Calendar);