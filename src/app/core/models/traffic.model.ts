export interface TrafficFlow {
  id: string;
  date: Date;
  tiles: string[];
}

export interface TrafficFlowSegment {
  id: string;
  date: Date;
  frc: string;
  currentSpeed: number;
  freeFlowSpeed: number;
  currentTravelTime: number;
  freeFlowTravelTime: number;
  coordinates: { latitude: number; longidute: number }[];
  address: string;
}

export interface TrafficIncident {
  id: string;
  date: Date;
  externalId: string;
  type: string;
  iconCategory: number;
  magnitudeOfDelay: number;
  geometryType: string;
  coordinates: number[][];
  address: string;
}

export interface Traffic {
  trafficFlows: TrafficFlow[];
  trafficFlowSegments: TrafficFlowSegment[];
  trafficIncidents: TrafficIncident[];
}
