document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const files = document.getElementById('fileUpload').files;
    if (files.length === 0) {
        alert('Please select files to upload.');
        return;
    }

    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    progressContainer.style.display = 'block';

    // Simulate file upload progress
    let progress = 0;
    const uploadInterval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(uploadInterval);
            alert('Files uploaded successfully!');
        } else {
            progress += 10; // Increment progress by 10% for demo purposes
            progressBar.style.width = `${progress}%`;
            progressText.textContent = `${progress}%`;
        }
    }, 500); // Update progress every 500ms

    // In a real-world scenario, you would use XMLHttpRequest or Fetch API to upload the files
    // and update the progress based on the upload progress events.
});

function updatePriceLabel(value) {
    document.getElementById('priceValue').textContent = `$${value}`;
}
