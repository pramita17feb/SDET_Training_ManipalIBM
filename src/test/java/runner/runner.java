package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="./src/test/java/features/calculateBMI.feature",
tags= {"@Regression"}
,glue="stepDefinition"
,plugin= {"pretty","html:target/site/cucumber-pretty","json:target/cucumber/cucumber.json"})
public class runner {

}
