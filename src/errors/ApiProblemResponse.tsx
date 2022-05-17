export interface ApiProblemResponse {
  type: string;
  title: string;
  detail: string;
  status: number;
  field?: string;
}
