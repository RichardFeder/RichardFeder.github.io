// Toggle project sections
function toggleProject(element) {
  const content = element.nextElementSibling;
  const isExpanded = content.classList.contains('expanded');
  
  if (isExpanded) {
    // Collapse
    content.classList.remove('expanded');
    element.classList.remove('active');
  } else {
    // Expand
    content.classList.add('expanded');
    element.classList.add('active');
  }
}
