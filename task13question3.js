import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class WikipediaAutomation {
    public static void main(String[] args) {
        // Set the path of the ChromeDriver executable
        System.setProperty("webdriver.chrome.driver", "path/to/chromedriver");

        // Initialize Chrome options
        ChromeOptions options = new ChromeOptions();

        // Create a new instance of the Chrome driver
        WebDriver driver = new ChromeDriver(options);

        try {
            // Navigate to Wikipedia
            driver.get("https://www.wikipedia.org");

            // Maximize the browser window
            driver.manage().window().maximize();

            // Find the search input element by its name attribute
            WebElement searchInput = driver.findElement(By.name("search"));

            // Enter the search query
            searchInput.sendKeys("Artificial Intelligence");

            // Submit the search form
            searchInput.submit();