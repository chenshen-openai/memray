function main() {
  const columns = [
    {
      title: "Thread ID",
      data: "tid",
    },
    {
      title: "Address",
      data: "address",
      render: function (data, type, row, meta) {
        return "0x" + data.toString(16);
      },
    },
    {
      title: "Size",
      data: "size",
      render: function (data, type, row, meta) {
        if (type === "sort" || type === "type") {
          return data;
        }

        return humanFileSize(data);
      },
    },
    {
      title: "Allocator",
      data: "allocator",
    },
    {
      title: "Allocations",
      data: "n_allocations",
    },
    {
      title: "Location",
      data: "stack_trace",
    },
  ];

  var table = $("#the_table").DataTable({
    data: table_data,
    columns: columns,
    order: [[2, "desc"]],
    pageLength: 100,
    dom: "<t>ip",
  });
  const searchButton = $("#searchTerm");
  searchButton.on("input", () => {
    const searchTerm = $("#searchTerm").val();
    table.search(searchTerm).draw();
  });
}

document.addEventListener("DOMContentLoaded", main);
