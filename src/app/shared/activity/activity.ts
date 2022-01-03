export interface Activity {
  id: string;
  name: string;
  total: number;
  times?: any[];
}

export interface ActiveState {
  started: number;
  activityId: string;
}
