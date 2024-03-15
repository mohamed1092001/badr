//traditional
function calculateTraditionalAverageCost() {
    var traditionalTotalCost = parseFloat(document.getElementById("traditionalTotalCost").value);
    var traditionalTotalDays = parseInt(document.getElementById("traditionalTotalDays").value);

    if (isNaN(traditionalTotalCost) || isNaN(traditionalTotalDays) || traditionalTotalDays <= 0) {
        alert("Please enter valid values for traditional total cost and total days.");
        return;
    }

    var traditionalAverageCost = traditionalTotalCost / traditionalTotalDays;

    document.getElementById("traditionalResult").textContent = "Traditional Average Cost per Day: " + traditionalAverageCost.toFixed(2)+("JD");
}
//ABC
function calculatestayrate() {
    // Get the values entered by the user
    var totalCost = parseFloat(document.getElementById("totalCost").value);
    var totalDays = parseInt(document.getElementById("totalDays").value);

    // Check if the values are valid
    if (isNaN(totalCost) || isNaN(totalDays) || totalDays <= 0) {
        alert("Please enter valid values for total cost and total days.");
        
    }

    // Calculate the average cost of stay
    var stayRate = totalCost / totalDays;

    // Display the result
    document.getElementById("result").textContent = "Average stay rate: " + stayRate.toFixed(2) + " JD";

}
//monitor
function calculateMonitoringRate() {
    var totalActivityCost2 = parseFloat(document.getElementById("totalActivityCost2").value);
    var totalMonitoringHours = parseFloat(document.getElementById("totalMonitoringHours").value);

    if (isNaN(totalActivityCost2) || isNaN(totalMonitoringHours) || totalMonitoringHours <= 0) {
        alert("Please enter valid values for total activity cost and total monitoring hours.");
        return;
    }

    var monitoringRate = totalActivityCost2 / totalMonitoringHours;

    document.getElementById("monitoringRateResult").textContent = "Monitoring Rate: " + monitoringRate.toFixed(2) + " JD";
}
//nurtrition
function calculateNutritionRate() {
    var totalNutritionCost = parseFloat(document.getElementById("totalNutritionCost").value);
    var totalStayDays = parseFloat(document.getElementById("totalStayDays").value);

    if (isNaN(totalNutritionCost) || isNaN(totalStayDays) || totalStayDays <= 0) {
        alert("Please enter valid values for total nutrition activity cost and total days of stay.");
        return;
    }

    var nutritionRate = totalNutritionCost / totalStayDays;

    document.getElementById("nutritionRateResult").textContent = "Nutrition Rate: " + nutritionRate.toFixed(2) + " JD";
}
//nursing
function calculateNursingRate() {
    var totalNursingCost = parseFloat(document.getElementById("totalNursingCost").value);
    var totalNursingHours = parseFloat(document.getElementById("totalNursingHours").value);

    if (isNaN(totalNursingCost) || isNaN(totalNursingHours) || totalNursingHours <= 0) {
        alert("Please enter valid values for total nursing activity cost and total nursing hours.");
        return;
    }

    var nursingRate = totalNursingCost / totalNursingHours;

    document.getElementById("nursingRateResult").textContent = "Nursing Rate: " + nursingRate.toFixed(2) + " JD";
}
//average
function calculateAverageDailycost2() {
    const severity = document.getElementById("severity").value;
    const stayRate2 = parseFloat(document.getElementById("stayRate2").value);
    const stayDays2 = parseInt(document.getElementById("stayDays2").value);
    const heartRateMonitoring2 = parseFloat(document.getElementById("heartRateMonitoring2").value);
    const monitoringHours2 = parseInt(document.getElementById("monitoringHours2").value);
    const nutritionRate2 = parseFloat(document.getElementById("nutritionRate2").value);
    const nutritionDays2 = parseInt(document.getElementById("nutritionDays2").value);
    const nursingRate2 = parseFloat(document.getElementById("nursingRate2").value);
    const nursingHours2 = parseInt(document.getElementById("nursingHours2").value);

    let averageCost2;

    if (severity === "high") {
      averageCost2 = ((stayRate2 * stayDays2) + (heartRateMonitoring2 * monitoringHours2) + (nutritionRate2 * nutritionDays2) + (nursingRate2 * nursingHours2)) / stayDays2;
    } else if (severity === "medium") {
      averageCost2 = ((stayRate2 * stayDays2) + (heartRateMonitoring2 * monitoringHours2) + (nutritionRate2 * nutritionDays2) + (nursingRate2 * nursingHours2)) / stayDays2;
    } else if (severity === "low") {
      averageCost2 = ((stayRate2 * stayDays2) + (heartRateMonitoring2* monitoringHours2) + (nutritionRate2 * nutritionDays2) + (nursingRate2 * nursingHours2)) / stayDays2;
    }

    document.getElementById("Average Daily Cost2").textContent = `Average Daily Cost2: `+ averageCost2.toFixed(2) +"JD";
}
  