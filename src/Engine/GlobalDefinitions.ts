
export const ErrorMessages = {
  partial: "#ERR",
  divideByZero: "#DIV/0!",
  invalidCell: "#REF!",
  invalidFormula: "#ERR",
  invalidNumber: "#ERR",
  invalidOperator: "#ERR",
  missingParentheses: "#ERR",
  emptyFormula: "#EMPTY!", // this is not an error message but we use it to indicate that the cell is empty
  negativeRoot: "#ERR",
  outOfRange: "#ERR",

}

export const ButtonNames = {
  edit_toggle: "edit-toggle",
  edit: "edit",
  done: "=",
  allClear: "AC",
  clear: "C",
  negative: "+/-",
  random: "Rand",
  sqrt: "\u{221A}",
  cuberoot: "\u{221B}",
  sqr: "x" + "\u{00B2}",
  cube: "x" + "\u{00B3}",
  empty: "\u{00A0}"
}


export interface CellTransport {
  formula: string[];
  value: number;
  error: string;
}

export interface CellTransportMap {
  [key: string]: CellTransport;
}
export interface DocumentTransport {
  columns: number;
  rows: number;
  cells: Map<string, CellTransport>;
  formula: string;
  result: string;
  currentCell: string;
  isEditing: boolean;
}

