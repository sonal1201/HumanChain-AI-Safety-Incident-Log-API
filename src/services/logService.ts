import logModel from "../model/logModel";

class LogService {
  async getAllLogs() {
    try {
      const logData = await logModel.find({});
      if (!logData) {
        throw new Error("No log data found");
      }
      return logData;
    } catch (error) {
      console.log("Error in getAllLog: ", error);
      throw error;
    }
  }

  async createLog(logdata: {
    title: string;
    description: string;
    severity?: "low" | "medium" | "high";
  }) {
    try {
      const logData = await logModel.create({
        title: logdata.title,
        description: logdata.description,
        severity: logdata.severity || "low",
      });
      return logData;
    } catch (error) {
      console.log("Error in createLog: ", error);
      throw error;
    }
  }

  async getLog(id: string) {
    try {
      const getlog = await logModel.findById(id);
      if (!getlog) {
        throw new Error("Log not found");
      }
      return getlog;
    } catch (error) {
      console.log("Error in getLog: ", error);
      throw error;
    }
  }

  async deleteLog(id: string) {
    try {
      const delete_log = await logModel.findByIdAndDelete(id);
      if (!delete_log) {
        throw new Error("Log not found");
      }
      return delete_log;
    } catch (error) {
      console.log("Error in deletingLogs: ", error);
      throw error;
    }
  }
}

export default LogService;
