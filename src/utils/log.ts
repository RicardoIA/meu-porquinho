class Log {
  write = (title: string, descript: any = "OK") => {
    var dateTime = new Date().toUTCString();

    console.log("[LOG]", `[${dateTime}]`, `${title}:`, descript);
  };

  writeError = (title: string, descript: any = null) => {
    var dateTime = new Date().toUTCString();

    console.log("[ERROR]", `[${dateTime}]`, `${title}:`, descript ?? "");
  };
}

export const log = new Log();
