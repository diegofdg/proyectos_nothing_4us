import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';
import cls from 'https://cdn.skypack.dev/classnames';

const WIDTH = 350;
const HEIGHT = 450;

const useMousePosition = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    const handler = e => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);
  return position;
};

const getRelativePosition = (position, rect) =>
rect === undefined ?
{ x: -1, y: -1 } :
{
  x: (position.x - rect.left) / rect.width, // Normalized to 0-1
  y: (position.y - rect.top) / rect.height // Normalized to 0-1
};


const Card = ({ src, width, height, onClick }) => {var _ref$current;
  const position = useMousePosition();
  const ref = React.useRef(null);
  const rect = (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect();
  const { x, y } = getRelativePosition(position, rect);
  const over = x > 0 && x < 1 && y > 0 && y < 1;
  return /*#__PURE__*/(
    React.createElement("div", {
      ref: ref,
      onClick: onClick,
      className: cls('container', { 'over': over }),
      style: {
        '--width': width + 'px',
        '--ratio': width / height,
        '--x': x,
        '--y': y } }, /*#__PURE__*/


    React.createElement("div", { className: "frame" }, /*#__PURE__*/
    React.createElement("div", { className: "photo", style: { backgroundImage: `url(${src})` } }), /*#__PURE__*/
    React.createElement("div", { className: "shine" }))));



};

const App = () => /*#__PURE__*/
React.createElement("div", { className: "app" }, /*#__PURE__*/
React.createElement(Card, { src: `https://picsum.photos/id/41/${WIDTH * 2}/${HEIGHT * 2}`, width: WIDTH, height: HEIGHT }));



ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.body);