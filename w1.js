/*
 * calculateSimpleInterest calculates and returns the simple interest
 * (floor value) for a fixed deposit. Formula used is,

 * calculateSimpleInterest calculates and returns the simple interest
 * for a fixed deposit. Formula used is,
 * Simple Interest: P X R X T / 100
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * calculateCompoundInterest calculates and returns the compound interest
 * (floor value) for a fixed deposit. Formula used is,
 *   Compound Interest=P[(1+I/100)^N - 1]
 *   where:
 *   P = Principal
 *   I = Daily interest rate
 *   N = Number of days
 *
 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - daily interest rate
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} interest
*/

/*
 * extraAmountPercentage calculates and returns the extra amount percentage borrower will have to pay in case of
 * compound interest (floor value) in comparison to the simple interest for a fixed deposit.

 *  In case of any input error (wrong date format, alphabets in daily interest etc.), return -1
 *
 * @param {number} principal  - Principal amount
 * @param {number} dailyInterest  - Daily interest rate.
 * @param {string} startingDate  - Starting date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @param {string} endingDate  - Ending date of the fixed deposit in "YYYY-MM-DD" format, example "2015-03-25"
 * @return {number} percentage
*/

function calculateSimpleInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
  
  // Add your code here
  const start = Date.parse(startingDate);
  const end = Date.parse(endingDate);
  const rate = parseFloat(dailyInterest);

  if (isNaN(start) || isNaN(end) || isNaN(principal) || isNaN(rate) || end <= start) {
    return -1;
  }
  const days = (end - start) / (1000 * 60 * 60 * 24);
  const interest = (principal * rate * days) / 100;
  return Math.floor(interest);
  }
  
  function calculateCompoundInterest(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
  
  // Add your code here
  const start = Date.parse(startingDate);
  const end = Date.parse(endingDate);
  const rate = parseFloat(dailyInterest);

  if (isNaN(start) || isNaN(end) || isNaN(principal) || isNaN(rate) || end <= start) {
    return -1;
  }
  const days = (end - start) / (1000 * 60 * 60 * 24);
  const amount = principal * (Math.pow(1 + rate / 100, days));
  const interest = amount - principal;
  return Math.floor(interest);
  }
  
  function extraAmountPercentage(
    principal,
    dailyInterest,
    startingDate,
    endingDate
  ) {
  
  // Add your code here
  const simple_interest = calculateSimpleInterest(principal, dailyInterest, startingDate, endingDate);
  const compound_interest = calculateCompoundInterest(principal, dailyInterest, startingDate, endingDate);

  if (simple_interest === -1 || compound_interest === -1) {
    return -1;
  }
  const percentage = ((compound_interest - simple_interest) / simple) * 100;

  return Math.floor(percentage);
  
}