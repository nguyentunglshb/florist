import { TableHeader } from "./table-header";

import type { TableProps } from "./models";
import { TableBody } from "./table-body";

export const Table = <T, K extends keyof T>(props: TableProps<T, K>) => {
  const { data, columns, hasCloseIcon = false } = props;

  return (
    <table className="w-full">
      <TableHeader<T, K> columns={columns} hasCloseIcon={hasCloseIcon} />
      <TableBody<T, K>
        data={data}
        columns={columns}
        hasCloseIcon={hasCloseIcon}
      />
    </table>
  );
};
