export type NumericItem = {
  quantity: number;
  value: number;
};

export type DescriptiveItem = {
  key: string;
  value: number;
};

export type NumericListItem = {
  list: NumericItem[];
};

export type TableValues = {
  quantity: number;
  value: number;
  quadDif: number;
  percentual: number;
  angle: number;
}