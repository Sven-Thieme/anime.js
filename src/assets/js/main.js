import anime from "animejs"

const foo = 'bar';
console.log('-> init App. Animation start!');

var myAnimation = anime({
  targets: ['.blue', '.green'],
  translateX: '200px',
  rotate: 360,
  borderRadius: '8px',
  duration: 2500,
  loop: true
});
// new
