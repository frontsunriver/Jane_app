import React from "react";
import styled from "styled-components/macro";
import { MoreVertical } from "react-feather";

import {
  Card as MuiCard,
  CardHeader,
  IconButton,
  Chip as MuiChip,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) =>
    props.theme.palette[props.color ? props.color : "primary"].light};
  color: ${(props) => props.theme.palette.common.white};
`;

const Paper = styled(MuiPaper)(spacing);

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)});
`;

// Data
let id = 0;
function createData(name, start, end, state, assignee) {
  id += 1;
  return { id, name, start, end, state, assignee };
}

const rows = [
  createData(
    "Project Aurora",
    "01/01/2021",
    "31/06/2021",
    <Chip label="Done" color="success" />,
    "James Dalton"
  ),
  createData(
    "Project Eagle",
    "01/01/2021",
    "31/06/2021",
    <Chip label="In Progress" color="warning" />,
    "Tracy Mack"
  ),
  createData(
    "Project Fireball",
    "01/01/2021",
    "31/06/2021",
    <Chip label="Done" color="success" />,
    "Sallie Love"
  ),
  createData(
    "Project Omega",
    "01/01/2021",
    "31/06/2021",
    <Chip label="Cancelled" color="error" />,
    "Glenda Jang"
  ),
  createData(
    "Project Yoda",
    "01/01/2021",
    "31/06/2021",
    <Chip label="Done" color="success" />,
    "Raymond Ennis"
  ),
  createData(
    "Project Zulu",
    "01/01/2021",
    "31/06/2021",
    <Chip label="Done" color="success" />,
    "Matthew Winters"
  ),
];

const DashboardTable = () => (
  <Card mb={6}>
    <CardHeader
      action={
        <IconButton aria-label="settings" size="large">
          <MoreVertical />
        </IconButton>
      }
      title="Latest projects"
    />
    <Paper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Assignee</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.start}</TableCell>
                <TableCell>{row.end}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>{row.assignee}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Paper>
  </Card>
);

export default DashboardTable;
