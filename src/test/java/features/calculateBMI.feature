Feature: To test BMI Calculation
@Regression
Scenario Outline: BMI Calculation of 5 user
Given Open the chrome browser
And open Calculator URL
Then validate Calculator page
When navigate to BMI Calculator link
Then validate BMI Calculator Page
When entered input  Age<Age>
And entered input Height<Height>
And entered input Weight<Weight>
Then Calculate BMI
And capture the BMI value
And close all browser
Examples:

|	Age | Height	| Weight	|
|	10	|		127		|		40		|
|	30	|		156		|		70		|
|	25	|		152		|		55		|
|	20	|		160		|		45		|
|	35	|		160		|		70		|
