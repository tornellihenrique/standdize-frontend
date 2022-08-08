export interface Weather {
  id: string;
  date: Date;
  condition: string;
  conditionIcon: string;
  conditionCode: string;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMb: number;
  pressureIn: number;
  humidity: number;
  cloud: number;
}
