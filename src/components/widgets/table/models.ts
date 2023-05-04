import React from "react";

export type ColumnDefineType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
  render?: (data: T) => React.ReactNode;
};

export type TableProps<T, K extends keyof T> = {
  data: T[];
  columns: ColumnDefineType<T, K>[];
  hasCloseIcon?: boolean;
  hasBorder?: boolean;
};

export type TableHeaderProps<T, K extends keyof T> = {
  columns: ColumnDefineType<T, K>[];
  hasCloseIcon?: boolean;
};

export type TableBodyProps<T, K extends keyof T> = {
  data: T[];
  columns: ColumnDefineType<T, K>[];
  hasCloseIcon?: boolean;
};
