import { pdIndicator } from "../pd-indicator.js";
import { TestUtils } from "../test-utils.js";

describe("pd-indicator", () => {
  describe("indicatorStyles", () => {
    it("checks the indicator styles is a non empty object upon initialization.", () => {
        const component = new pdIndicator();
        expect(typeof component.indicatorStyles).toEqual("object");
		expect(component.indicatorStyles.length > 0).toBeTrue();
		expect(component.indicatorStyles).toEqual(['moon', 'yin-yang', 'pointer', 'rectangle', 'circle', 'pacman', 'octastar', 'infinity', 'heart','switch', 'donut']);
    });
  });
  describe("color", () => {
    it("Checks that color has default value.", () => {
        const component = new pdIndicator();
        expect(component.color).toEqual("232323");
    });
  });
  describe("activeColor", () => {
    it("Checks that active-color has default value.", () => {
        const component = new pdIndicator();
        expect(component.activeColor).toEqual("ff0000");
    });
  });
  describe("focusColor", () => {
    it("Checks that focus-color has default value.", () => {
        const component = new pdIndicator();
        expect(component.focusColor).toEqual("7f8000");
    });
  });
  describe("type", () => {
    it("Checks that type has default value.", () => {
        const component = new pdIndicator();
        expect(component.type).toEqual("circle");
    });
  });
  describe("sRoot", () => {
    it('Checks that component is attached to DOM and is equal to <pd-indicator>', async () => {
        const component = await TestUtils.render('pd-indicator');
        expect(component.outerHTML).toEqual("<pd-indicator></pd-indicator>");
    });
  });  
  describe("sRoot", () => {
    it('Checks that component is attached to DOM and has empty innerHTML', async () => {
        const component = await TestUtils.render('pd-indicator');
        expect(component.innerHTML.includes("")).toBeTruthy();
    });
  });   
 });
describe('Array', () => {
  describe('#indexOf()', () => {
    it('should return -1 when the value is not present. This is a demo test to check that the response from the testing framework is ok.', () => {
    assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});