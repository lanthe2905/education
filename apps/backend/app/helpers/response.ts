type ErrorCode = "SYSTEM_ERROR";

type ApiResponse = {
  data?: any;
  code?: "" | "SUCCESS" | ErrorCode;
  message?: string | undefined;
  status: number  ; //etc 200, 201, 400
};


type Params = {
  data: any;
  message?: string | undefined;
  status?:  number | undefined;
  code?: "" | "SUCCESS" | ErrorCode;
};

export default {
  success: ({ data, message = "", status = 200 }: Params): ApiResponse => {
    return {
      data: data,
      code: "SUCCESS",
      status: status,
      message: message,
    };
  },

  error: ({
    message = "Lỗi phía server",
    status=  500,
    code = "SYSTEM_ERROR",
  }: Params): ApiResponse => {
    return {
      code: code,
      status: status,
      message: message,
    };
  },
};
