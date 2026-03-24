export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    // Get navbar height (h-20 = 80px, plus some buffer)
    const navbarHeight = 100;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
