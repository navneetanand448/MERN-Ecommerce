import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { usePagination, useSortBy, useTable } from "react-table";

function TableHOC(
  columns,
  data,
  containerClassname,
  heading,
  showPagination = false
) {
  return function HOC() {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
      pageCount,
      state: { pageIndex },
    } = useTable(
      {
        columns,
        data,
        initialState: { pageSize: 6 },
      },
      useSortBy,
      usePagination
    );

    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>

        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              // 1. Extract key from headerGroup props
              const { key, ...restHeaderGroupProps } =
                headerGroup.getHeaderGroupProps();

              return (
                <tr key={key} {...restHeaderGroupProps}>
                  {headerGroup.headers.map((column) => {
                    // 2. Extract key from column props
                    const { key, ...restColumnProps } = column.getHeaderProps(
                      column.getSortByToggleProps()
                    );

                    return (
                      <th key={key} {...restColumnProps}>
                        {column.render("Header")}
                        {column.isSorted && (
                          <span>
                            {" "}
                            {column.isSortedDesc ? (
                              <AiOutlineSortDescending />
                            ) : (
                              <AiOutlineSortAscending />
                            )}
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              // 3. Extract key from row props
              const { key, ...restRowProps } = row.getRowProps();

              return (
                <tr key={key} {...restRowProps}>
                  {row.cells.map((cell) => {
                    // 4. Extract key from cell props
                    const { key, ...restCellProps } = cell.getCellProps();

                    return (
                      <td key={key} {...restCellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        {showPagination && (
          <div className="table-pagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>
              {`${pageIndex + 1} of ${pageCount}`}
            </span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHOC;