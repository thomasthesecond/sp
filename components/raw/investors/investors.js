"use strict";

import Modal from "../../03-components/modal";
import { forEach } from "../../../assets/js/utils";

export default class InvestorsPage {
  static highlightsPage() {
    const modal = new Modal();

    const modalElement = document.querySelector(".js-modal");
    const teamMembers = document.querySelectorAll(".js-team-member");

    forEach(teamMembers, (index, member) => {
      const name = member.querySelector(".TeamMember-name").innerHTML;
      const title = member.querySelector(".TeamMember-title").innerHTML;
      const bio = member.querySelector(".TeamMember-bio").innerHTML;
      const trigger = member.querySelector(".js-modal-trigger");

      const content = `
        <div class="TeamMember">
          <h2 class="TeamMember-name" id="${modalElement.id}-title">${name}</h2>
          <div class="TeamMember-title">${title}</div>
          <p class="TeamMember-bio" id="${modalElement.id}-description">${bio}</p>
        </div>
      `;

      trigger.addEventListener("click", (event) => {
        modal.open(content);
        event.preventDefault();
      }, false);
    });
  }

  constructor(options) {
    this.options = options;

    this.highlights = document.querySelector(".InvestorsPage-highlights");
  }

  render() {
    if (this.highlights) {
      InvestorsPage.highlightsPage();
    }
  }
}
