export function scrollTop() {
  const screen: HTMLElement = document.querySelector('#container');
  const screenHeight = screen.clientHeight;
  window.scrollBy({
    top: screenHeight + 8,
    left: 0,
    behavior: 'smooth',
  });
}
