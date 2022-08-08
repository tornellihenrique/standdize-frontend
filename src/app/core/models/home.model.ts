export interface ServiceOverview {
  id: string;
  name: string;
  description: string;
  lastUpdate: Date;
}

export interface Sync {
  id: string;
  date: Date;
  type: string;
  hasError: boolean;
  errorMessage: string;
}
