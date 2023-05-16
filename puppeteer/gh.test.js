let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com");
});

afterEach(() => {
  page.close();
});

describe("New github page tests", () => {
  test("Test click pricing ", async () => {
    await page.goto("https://github.com/pricing");
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toContain("Pricing · Plans for every developer · GitHub");
  }, 60000);
  test("Test click Sign in ", async () => {
    await page.goto("https://github.com/login");
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toContain("Sign in to GitHub");
  }, 60000);
  test("Test click About ", async () => {
    await page.goto("https://github.com/about");
    await page.waitForSelector("h1");
    const title = await page.title();
    expect(title).toContain("About · GitHub");
  }, 60000);

});


describe("Github page tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("https://github.com/team");
  });
  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual('GitHub for teams · Build like the best teams on the planet · GitHub');
  },60000);
  

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  },60000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  },60000);
});

