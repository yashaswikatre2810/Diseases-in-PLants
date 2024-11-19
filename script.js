function captureImage() {
    const imageInput = document.getElementById('imageInput');
    const capturedImage = document.getElementById('capturedImage');
    const assistantSolution = document.getElementById('assistantSolution');
  
    const file = imageInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function (e) {
      capturedImage.src = e.target.result;
      capturedImage.style.display = 'block';
  
      // Simulate fetching solution from dataset (replace with actual logic)
      const solution = getAssistantSolution();
      assistantSolution.innerHTML = solution;
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  }
  
  function getAssistantSolution() {
    // Simulate fetching solution from dataset (replace with actual logic)
    return 'The plant is healthy. Water it regularly and provide sufficient sunlight.';
  }
  