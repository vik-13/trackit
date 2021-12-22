export interface Category {
  id: string;
  name: string;
  total: number;
  times?: any[];
}

export interface Active {
  started: number;
  categoryId: string;
}
