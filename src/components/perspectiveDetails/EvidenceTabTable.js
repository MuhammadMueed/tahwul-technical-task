import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import * as React from 'react';
import { theme } from '../../theme/theme';
import BoxContainer from '../BoxContainer';

function createData(id, documentNumber, documentName, documentLead, documentPreparer, date, dueDate, status) {
  return {
    id,
    documentNumber,
    documentName,
    documentLead,
    documentPreparer,
    date,
    dueDate,
    status,
  };
}

const rows = [
  createData(1, '5.4.1.1', 'Digital_Transformation_Plan.pdf', 'Ahmed Khaled', 'Ahmed Khaled', '2025-08-01', '2025-08-01', 'Approved'),
  createData(2, '5.4.2.1', 'KPI_Framework.xlsx', 'Ahmed Khaled', 'Ahmed Khaled', '2025-08-01', '2025-08-01', 'Pending Review'),
  createData(3, '5.4.2.2', 'Project_Risk_Assessment.pdf', 'Ahmed Khaled', 'Ahmed Khaled', '2025-08-01', '2025-08-01', 'Pending Review'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

const headCells = [
  {
    id: 'documentNumber',
    numeric: false,
    disablePadding: false,
    label: 'Document Number',
  },
  {
    id: 'documentName',
    numeric: false,
    disablePadding: false,
    label: 'Document Name',
  },
  {
    id: 'documentLead',
    numeric: false,
    disablePadding: false,
    label: 'Document Lead',
  },
  {
    id: 'documentPreparer',
    numeric: false,
    disablePadding: false,
    label: 'Document Preparer',
  },
  {
    id: 'date',
    numeric: false,
    disablePadding: false,
    label: 'Date',
  },
  {
    id: 'dueDate',
    numeric: false,
    disablePadding: false,
    label: 'Due Date',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: true,
    label: 'Status',
  },
];

function CustomTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead sx={{ bgcolor: 'background.paper' }}>
      <TableRow sx={{ borderRadius: 2 }}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.id === 'status' ? 'center' : 'left'}
            padding={'checkbox'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              sx={{ color: 'text.primary', fontSize: '12px', py: 1, px: 1 }}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EvidenceTabTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('documentNumber');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(() => [...rows].sort(getComparator(order, orderBy)), [order, orderBy]);

  const getDueDateColor = (status) => {
    switch (status) {
      case 'Approved':
        return 'success';
      case 'Pending Review':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <BoxContainer
        body={
          <Box sx={{ width: '100%' }}>
            <TableContainer>
              <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={'medium'}>
                <CustomTableHead order={order} orderBy={orderBy} onRequestSort={handleRequestSort} />
                <TableBody>
                  {visibleRows.map((row, index) => {
                    const cellStyle = { borderBottom: '1px solid', borderBottomColor: 'divider' };
                    return (
                      <TableRow hover tabIndex={-1} key={row.id} sx={{ cursor: 'pointer', ...cellStyle }}>
                        <TableCell sx={{ ...cellStyle }}>{row.documentNumber}</TableCell>
                        <TableCell sx={{ ...cellStyle }}>{row.documentName}</TableCell>
                        <TableCell sx={{ ...cellStyle }}>{row.documentLead}</TableCell>
                        <TableCell sx={{ ...cellStyle }}>{row.documentPreparer}</TableCell>
                        <TableCell sx={{ ...cellStyle }}>{row.date}</TableCell>
                        <TableCell sx={{ ...cellStyle }}>{row.dueDate}</TableCell>
                        <TableCell align="center" sx={{ ...cellStyle }}>
                          <Box
                            sx={{
                              color: `${getDueDateColor(row.status)}.main`,
                              backgroundColor: alpha(theme.palette[getDueDateColor(row.status)].main, 0.2),
                              p: 1,
                              borderRadius: 1,
                            }}
                          >
                            {row.status}
                          </Box>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        }
      />
    </Box>
  );
}
