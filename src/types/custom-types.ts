export type NumericItem = {
  quantity: number;
  value: number;
};

export type DescriptiveItem = {
  quantity: number;
  value: string;
};

export type DescriptiveElement = {
  quantity: number;
  value: string;
  angle: number;
  percentual: number;
};

export type NumericListItem = {
  list: NumericItem[];
};

export type DescriptiveListItem = {
  list: DescriptiveListItem[];
};

export type TableValues = {
  quantity: number;
  value: number | string;
  quadDif?: number;
  percentual: number;
  angle: number;
};

export type TableValuesList = {
  list: TableValues[];
};

export type DescriptiveItemList = {
  list: DescriptiveItem[];
};