var images = document.querySelectorAll('img');
new simpleParallax(images, {
  orientation: 'right',
  scale: 1.5,
  overflow: true,
  delay: .6,
  transition: 'cubic-bezier(0,0,0,1)'
});