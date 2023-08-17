import React from "react";
import DataTable from "react-data-table-component";

function CustomDataTable({
  columns,
  data,
  handleEdit,
  handleDelete,
  editingRowId,
  editName,
  setEditName,
  editEmail,
  setEditEmail,
  editRole,
  setEditRole,
  handleSaveEdit,
  cancelEdit,
  selectedRows,
  handleRowSelected,
}) {
  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      selectableRows
      onSelectedRowsChange={handleRowSelected}
    />
  );
}

const customStyles = {
  headRow: {
    style: {
      color: "Black",
      borderRadius: "10px",
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      textTransform: "uppercase",
      borderRadius: "10px",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
      borderRadius: "10px",
    },
  },
};

export default CustomDataTable;


