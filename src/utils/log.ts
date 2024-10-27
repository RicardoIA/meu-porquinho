class Log {
  write = (title: string, descript: any = null) => {
    var dateTime = new Date().toUTCString();

    console.log("[LOG]", `[${dateTime}]`, `${title}:`, descript);
  };
}

export const log = new Log();
