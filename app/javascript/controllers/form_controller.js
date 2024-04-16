import { Controller } from "@hotwired/stimulus"
import debounce from "debounce"


// Connects to data-controller="form"
export default class extends Controller {

  initialize() {
    console.log("initialized");
    this.submit = debounce(this.submit.bind(this), 1000);
  }

  submit() {
    console.log("submit");
    this.element.requestSubmit();
  }
}
