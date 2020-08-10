package stepDefinition;

import static org.junit.Assert.assertEquals;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDefinition {
	WebDriver driver;
	@Given("^Open the chrome browser$")
	public void open_the_chrome_browser()  {
	    // Write code here that turns the phrase above into concrete actions
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\PramitaGhosh\\Documents\\SeleniumLib\\latestSeleniumSoftware\\chromedriver_win32\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();
	}

	@Given("^open Calculator URL$")
	public void open_Calculator_URL() {
	    // Write code here that turns the phrase above into concrete actions
		driver.get("https://www.calculator.net/");
		
	}

	@Then("^validate Calculator page$")
	public void validate_Calculator_page() {
	    // Write code here that turns the phrase above into concrete actions
		String actualTitle=driver.getTitle();
		assertEquals("Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science", actualTitle);
	}

	@When("^navigate to BMI Calculator link$")
	public void navigate_to_BMI_Calculator_link(){
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//a[@href='/bmi-calculator.html']")).click();
	}

	@Then("^validate BMI Calculator Page$")
	public void validate_BMI_Calculator_Page() {
	    // Write code here that turns the phrase above into concrete actions
		String actualTitle=driver.getTitle();
		assertEquals("BMI Calculator", actualTitle);
	}

	@When("^entered input  Age(\\d+)$")
	public void entered_input_Age(int age){
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='cage']")).clear();
		driver.findElement(By.xpath("//input[@id='cage']")).sendKeys(Integer.toString(age));
	}

	
	@When("^entered input Height(\\d+)$")
	public void entered_input_Height(int height) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='cheightmeter']")).clear();
		driver.findElement(By.xpath("//input[@id='cheightmeter']")).sendKeys(Integer.toString(height));
	}

	@When("^entered input Weight(\\d+)$")
	public void entered_input_Weight(int weight) {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@id='ckg']")).clear();
		driver.findElement(By.xpath("//input[@id='ckg']")).sendKeys(Integer.toString(weight));
	}
	
	@Then("^Calculate BMI$")
	public void calculate_BMI(){
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.xpath("//input[@value='Calculate']")).click();
	}

	@Then("^capture the BMI value$")
	public void capture_the_BMI_value() {
	    // Write code here that turns the phrase above into concrete actions
		String bmi=driver.findElement(By.xpath("//b[contains(.,'BMI =')]")).getText();
		String bmiLevel=driver.findElement(By.xpath("//font[@color]/b")).getText();
		System.out.println("And the BMI is :: "+bmi+" "+bmiLevel);
	}
	
	@Then("^close all browser$")
	public void close_all_browser() {
		driver.quit();
	}


}
