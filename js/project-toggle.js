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

// Toggle publication abstracts
function toggleAbstract(event, element) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  const pubAbstract = element.parentElement;
  const abstractFull = pubAbstract.querySelector('.abstract-full');
  const preview = pubAbstract.querySelector('.abstract-preview');
  
  if (abstractFull.classList.contains('show')) {
    // Collapse
    abstractFull.classList.remove('show');
    preview.style.display = 'block';
    element.textContent = 'Read more';
  } else {
    // Expand
    abstractFull.classList.add('show');
    preview.style.display = 'none';
    element.textContent = 'Read less';
  }
  
  return false;
}

// Make sure the function is available globally
window.toggleAbstract = toggleAbstract;
