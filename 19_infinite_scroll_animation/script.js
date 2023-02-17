import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

const COLORS = ['#bbf7d0', '#99f6e4', '#bfdbfe', '#ddd6fe', '#f5d0fe', '#fed7aa', '#fee2e2'];
const TAGS = ['HTML', 'CSS', 'JavaScript', 'Typescript', 'Tailwind', 'React', 'Next.js', 'Gatsby', 'UI/UX', 'SVG', 'animation', 'webdev'];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = arr => [...arr].sort(() => .5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "loop-slider", style: {
        '--duration': `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal' } }, /*#__PURE__*/

    React.createElement("div", { className: "inner" },
    children,
    children)));



};

const Tag = ({ text, color }) => /*#__PURE__*/
React.createElement("div", { className: "tag", style: { '--color': color } }, /*#__PURE__*/React.createElement("span", null, "#"), " ", text);


const App = () => /*#__PURE__*/
React.createElement("div", { className: "app" }, /*#__PURE__*/
React.createElement("header", null, /*#__PURE__*/
React.createElement("h1", null, "Infinite Scroll Animation"), /*#__PURE__*/
React.createElement("p", null, "CSS only, content independent, bi-directional, customizable")), /*#__PURE__*/

React.createElement("div", { className: "tag-list" },
[...new Array(ROWS)].map((_, i) => /*#__PURE__*/
React.createElement(InfiniteLoopSlider, { key: i, duration: random(DURATION - 5000, DURATION + 5000), reverse: i % 2 },
shuffle(TAGS).slice(0, TAGS_PER_ROW).map((tag) => /*#__PURE__*/
React.createElement(Tag, { text: tag, key: tag })))), /*#__PURE__*/



React.createElement("div", { className: "fade" })));




ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.body);