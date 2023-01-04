import "./JS/cookies";
import { scrollFunction } from "./JS/topBtn";
import "./JS/darkmode";
import "./JS/library";
import {
  getPopularMovie,
  getSearchMovie,
  pagination,
  SEARCH_BTN,
  PAGINATION_CONTAINER,
} from "./JS/main";
import { renderLoader } from "./JS/loader";

window.onscroll = function () {
  scrollFunction();
};

getPopularMovie();
SEARCH_BTN.addEventListener("click", getSearchMovie);
PAGINATION_CONTAINER.addEventListener("click", pagination);

import "./JS/team-modal";