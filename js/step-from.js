let currentStep = 0;
const steps = document.querySelectorAll('.step');
const stepNavs = document.querySelectorAll('.step-nav');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const progressLine = document.getElementById('progressLine');

function showStep(index) {
  // Hide all steps
  steps.forEach(step => step.classList.add('hidden'));
  // Remove active class from navs
  stepNavs.forEach(nav => nav.classList.remove('active'));
  
  // Show selected step
  steps[index].classList.remove('hidden');
  stepNavs[index].classList.add('active');

  // Update progress line
  const progress = (index / (steps.length - 1)) * 100;
  progressLine.style.width = `${progress}%`;

  // Update buttons
  prevBtn.classList.toggle('hidden', index === 0);
  nextBtn.textContent = index === steps.length - 1 ? 'Submit' : 'Next';
  
  // Pulse animation for current step
  const currentIndicator = stepNavs[index].querySelector('div');
  currentIndicator.classList.add('animate-pulse');
  setTimeout(() => currentIndicator.classList.remove('animate-pulse'), 1000);
}

nextBtn.addEventListener('click', () => {
  if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
  } else {
    alert('Form submitted!');
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    showStep(currentStep);
  }
});

// Nav click handler
stepNavs.forEach(nav => {
  nav.addEventListener('click', () => {
    currentStep = parseInt(nav.dataset.step);
    showStep(currentStep);
  });
});

// Initial render
showStep(currentStep);



// =====================/

document.addEventListener('DOMContentLoaded', function() {
  // Form navigation system
  let currentStep = 0;
  const steps = [
    document.getElementById('kyc-section'),
    document.getElementById('customer-section'),
    document.getElementById('bank-section')
  ];
  
  // Navigation buttons
  const kycNextBtn = document.getElementById('kyc-next-btn');
  const customerBackBtn = document.getElementById('customer-back-btn');
  const customerNextBtn = document.getElementById('customer-next-btn');
  const bankBackBtn = document.getElementById('bank-back-btn');
  const bankSubmitBtn = document.getElementById('bank-submit-btn');

  // Show current step
  function showStep(stepIndex) {
    // Hide all steps
    steps.forEach(step => step.classList.add('hidden'));
    
    // Show current step
    steps[stepIndex].classList.remove('hidden');
  }

  // Next button functionality
  function goToNextStep() {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    }
  }

  // Back button functionality
  function goToPreviousStep() {
    if (currentStep > 0) {
      currentStep--;
      showStep(currentStep);
    }
  }

  // Event listeners for navigation buttons
  kycNextBtn.addEventListener('click', goToNextStep);
  customerNextBtn.addEventListener('click', goToNextStep);
  customerBackBtn.addEventListener('click', goToPreviousStep);
  bankBackBtn.addEventListener('click', goToPreviousStep);
  
  // Form submission
  bankSubmitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Here you would typically submit the form data to your backend
  });

  // Show/hide bank details based on checkbox selection
  document.getElementById('banktransfer')?.addEventListener('change', function() {
    document.getElementById('bank').classList.toggle('hidden', !this.checked);
  });
  
  document.getElementById('cheque')?.addEventListener('change', function() {
    document.getElementById('cheque-info').classList.toggle('hidden', !this.checked);
  });
  
  document.getElementById('mobilepayment')?.addEventListener('change', function() {
    document.getElementById('mobile').classList.toggle('hidden', !this.checked);
  });

  // Initialize form
  showStep(currentStep);
});