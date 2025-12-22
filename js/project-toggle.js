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
  event.preventDefault();
  const abstractDiv = element.previousElementSibling;
  const preview = element.parentElement.querySelector('.abstract-preview');
  
  if (abstractDiv.classList.contains('show')) {
    // Collapse
    abstractDiv.classList.remove('show');
    preview.style.display = 'block';
    element.textContent = 'Read more';
  } else {
    // Expand
    abstractDiv.classList.add('show');
    preview.style.display = 'none';
    element.textContent = 'Read less';
  }
}

// Make sure the function is available globally
window.toggleAbstract = toggleAbstract;
