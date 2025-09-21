import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Chip,
  Checkbox,
  IconButton,
  Typography,
  Box,
  Pagination,
  styled,
} from "@mui/material";
import {
  MoreVert as MoreVertIcon,
  Schedule as ScheduleIcon,
  CalendarToday as CalendarIcon,
} from "@mui/icons-material";

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: 8,
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: "#fafafa",
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:hover": {
    backgroundColor: "#f5f5f5",
    "& .hover-checkbox": {
      opacity: 1,
    },
  },
  "&.selected": {
    backgroundColor: "#e3f2fd",
  },
  cursor: "pointer",
  transition: "background-color 0.2s ease",
}));

const HoverCheckbox = styled(Checkbox)(({ theme }) => ({
  opacity: 0,
  transition: "opacity 0.2s ease",
  "&.visible": {
    opacity: 1,
  },
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  fontWeight: 500,
  fontSize: "0.75rem",
  height: 24,
}));

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case "in progress":
      return { backgroundColor: "#e3f2fd", color: "#1976d2" };
    case "complete":
      return { backgroundColor: "#e8f5e8", color: "#2e7d32" };
    case "pending":
      return { backgroundColor: "#fff3e0", color: "#f57c00" };
    case "approved":
      return { backgroundColor: "#fff9c4", color: "#f57f17" };
    case "rejected":
      return { backgroundColor: "#ffebee", color: "#d32f2f" };
    default:
      return { backgroundColor: "#f5f5f5", color: "#666" };
  }
};

const orderData = [
  {
    id: "#CM9801",
    user: { name: "Natali Croig", avatar: "/api/placeholder/32/32" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: { name: "Orlando Diggs", avatar: "/api/placeholder/32/32" },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: { name: "Andi Lane", avatar: "/api/placeholder/32/32" },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: { name: "Natali Croig", avatar: "/api/placeholder/32/32" },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    user: { name: "Kate Morrison", avatar: "/api/placeholder/32/32" },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: { name: "Drew Cano", avatar: "/api/placeholder/32/32" },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
];

const OrdersTable = ({ searchName, isSorting, data }) => {
  const [selectedRows, setSelectedRows] = useState(new Set());
  const [hoveredRow, setHoveredRow] = useState(null);
  const [page, setPage] = useState(1);

  const handleRowSelect = (id, event) => {
    event.stopPropagation();
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const isSelected = (id) => selectedRows.has(id);

  const formatDate = (dateString) => {
    if (
      dateString.includes("ago") ||
      dateString === "Just now" ||
      dateString === "Yesterday"
    ) {
      return (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            color: "#666",
          }}
        >
          <ScheduleIcon sx={{ fontSize: 14 }} />
          <Typography variant="body2">{dateString}</Typography>
        </Box>
      );
    }
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", gap: 0.5, color: "#666" }}
      >
        <CalendarIcon sx={{ fontSize: 14 }} />
        <Typography variant="body2">{dateString}</Typography>
      </Box>
    );
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getAvatarColor = (name) => {
    const colors = [
      "#FF6B6B",
      "#4ECDC4",
      "#45B7D1",
      "#96CEB4",
      "#FFEAA7",
      "#DDA0DD",
      "#98D8C8",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  return (
    <Box sx={{ borderBottomColor: "#1C1C1C33", minHeight: "100vh" }}>
      <StyledTableContainer component={Paper}>
        <Table>
          <StyledTableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontWeight: 600,
                  color: "#1C1C1C66",
                  fontSize: "0.875rem",
                }}
              >
                Order ID
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  color: "#1C1C1C66",
                  fontSize: "0.875rem",
                }}
              >
                User
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  color: "#1C1C1C66",
                  fontSize: "0.875rem",
                }}
              >
                Project
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  color: "#1C1C1C66",
                  fontSize: "0.875rem",
                }}
              >
                Address
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  color: "#1C1C1C66",
                  fontSize: "0.875rem",
                }}
              >
                Date
              </TableCell>
              <TableCell
                sx={{
                  fontWeight: 600,
                  color: "#1C1C1C66",
                  fontSize: "0.875rem",
                }}
              >
                Status
              </TableCell>
              <TableCell sx={{ width: 50 }}></TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                key={row.id}
                className={isSelected(row.id) ? "selected" : ""}
                onMouseEnter={() => setHoveredRow(row.id)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <HoverCheckbox
                      className={`hover-checkbox ${
                        hoveredRow === row.id || isSelected(row.id)
                          ? "visible"
                          : ""
                      }`}
                      size="small"
                      checked={isSelected(row.id)}
                      onChange={(e) => handleRowSelect(row.id, e)}
                      sx={{ mr: 1 }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      {row.id}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Avatar
                      sx={{
                        width: 32,
                        height: 32,
                        backgroundColor: getAvatarColor(row.user.name),
                        fontSize: "0.875rem",
                      }}
                    >
                      {getInitials(row.user.name)}
                    </Avatar>
                    <Typography variant="body2">{row.user.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography variant="body2">{row.project}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ color: "#666" }}>
                    {row.address}
                  </Typography>
                </TableCell>
                <TableCell>{formatDate(row.date)}</TableCell>
                <TableCell>
                  <StatusChip
                    label={row.status}
                    size="small"
                    sx={getStatusColor(row.status)}
                  />
                </TableCell>
                <TableCell>
                  <IconButton size="small" sx={{ color: "#999" }}>
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={5}
          page={page}
          onChange={(event, value) => setPage(value)}
          color="primary"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default OrdersTable;
