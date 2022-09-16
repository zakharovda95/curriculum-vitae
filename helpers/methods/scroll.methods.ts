export function customScrollBehavior(position: string): void {
  if (position === 'top') {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    });
  }

  if (position === 'bottom') {
    window.scrollTo({
      left: 0,
      top: window.outerHeight,
      behavior: 'smooth',
    });
  }
}
