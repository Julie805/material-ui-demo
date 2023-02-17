
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

import { makeStyles } from '@mui/styles'

export default function MyTable() {

  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    head: {
      backgroundColor: '#3f51b5',
      color: '#fff',
    },
    body: {
      fontSize: 14,
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell>Header 1</TableCell>
            <TableCell>Header 2</TableCell>
            <TableCell>Header 3</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.body}>
          <TableRow>
            <TableCell>Row 1, Column 1</TableCell>
            <TableCell>Row 1, Column 2</TableCell>
            <TableCell>Row 1, Column 3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Column 1</TableCell>
            <TableCell>Row 2, Column 2</TableCell>
            <TableCell>Row 2, Column 3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}