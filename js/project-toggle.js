// Toggle project sections
function toggleProject(element) {
  console.log('toggleProject called', element);
  const content = element.nextElementSibling;
  console.log('content element:', content);
  const isExpanded = content.classList.contains('expanded');
  console.log('isExpanded:', isExpanded);
  
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

// Make sure the function is available globally
window.toggleProject = toggleProject;
