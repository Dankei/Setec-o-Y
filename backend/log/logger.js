// Simulação de enum usando um objeto
const LogType = {
  INFO: "\nℹ Info",
  TRACE: "🔍 Trace",
  ERROR: "❌ Error",
  SUCCESS: "✅ Success"
};

function logMessage(type, message) {
  console.log(`${type}: ${message}`);
}

// Funções utilitárias para facilitar o uso
export const log = {
  info: (message) => logMessage(LogType.INFO, message),
  trace: (message) => logMessage(LogType.TRACE, message),
  error: (message) => logMessage(LogType.ERROR, message),
  success: (message) => logMessage(LogType.SUCCESS, message),
  init: () => console.log("----------------Inicializando-------------------------\n"),
  end: () => console.log("\n-----------------Inicializado---------------------------\n"),

}
