function downloadCV() {
    const link = document.createElement('a');
    link.href = 'Aayush_CV.pdf'; // Replace with the correct path to your CV
    link.download = 'Aayush_CV.pdf';
    link.click();
}
