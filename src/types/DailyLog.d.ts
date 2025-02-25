interface IFood {
  _id?: string;
  name: string;
  calories?: number;
}
interface IActivity {
  _id?: string;
  name: string;
  calories?: number;
}

interface IDailyLog {
  _id?: string;
  userId?: string;
  date?: string | Date;
  weight?: number;
  height?: number;
  goal?: string;
  activityLevel?: string;
  food?: IFood[];
  activity?: IActivity[];
  bmr?: number;
  tdee?: number;
  totalCaloriesIn?: number;
  totalCaloriesOut?: number;
}

export type { IFood, IActivity, IDailyLog };
