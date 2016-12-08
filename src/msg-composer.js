module.exports = function(data) {
  return ("⚠️ INFO ⚠️ \n\n" +
    "🖥 The status of your monitor #" + data.monitorID + " " + data.monitorFriendlyName + " (" + data.monitorURL + ") changed. \n\n" +
    (data.alertType === "1" ? "🔴 Now is down" : "🔵 Now is up") +
    (data.alertDetails ? ('\n\n' + data.alertDetails) : ""));
}
