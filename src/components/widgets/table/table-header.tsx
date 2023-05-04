import type { TableHeaderProps } from "./models";

export const TableHeader = <T, K extends keyof T>(
  props: TableHeaderProps<T, K>
) => {
  const { columns, hasCloseIcon = false } = props;
  return (
    <thead className="border-collapse border border-solid border-[#e8e8e8]">
      <tr>
        {hasCloseIcon && <th>close Icon</th>}
        {columns.map((col) => {
          return (
            <th
              style={{
                width: col.width + "px",
              }}
              className="p-4 text-primary font-semibold"
              key={col.key as string}
            >
              {col.header}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};
