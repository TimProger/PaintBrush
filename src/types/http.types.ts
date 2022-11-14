export interface ResponseSuccess<D> {
  message: string;
  data: D;
}

export interface ResponseError {
  status: number;
  statusText: string;
}
