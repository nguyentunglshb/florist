import type { TableBodyProps } from "./models";

export const TableBody = <T, K extends keyof T>(
  props: TableBodyProps<T, K>
) => {
  const { columns, hasCloseIcon = false, data } = props;

  const rows = data.map((row, index1) => {
    return (
      <tbody>
        <tr
          key={index1}
          className="border-collapse border border-solid border-[#e8e8e8]"
        >
          {hasCloseIcon && <td>Close Icon</td>}
          {columns.map((col, index2) => {
            return (
              <td key={index2} className="py-2 text-center align-middle">
                {col.render
                  ? col.render(row)
                  : (row[col.key] as React.ReactNode)}
              </td>
            );
          })}
        </tr>
      </tbody>
    );
  });

  return <>{rows}</>;
};
