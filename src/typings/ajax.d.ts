declare namespace Ajax{
  export interface AioxsResponse{
    data: AjaxResponse;
  }

  export interface AjaxResponse{
    ID:number;
    message?: string;
  }
}
