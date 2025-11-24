const ThankYouStep: React.FC = () => {
  return (
    <div className="mt-8 text-center">
      <p className="mb-4 text-lg">Connect with us:</p>
      <div className="flex justify-center gap-4 text-2xl">
        <a 
          href="https://facebook.com/grocerymoney" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon text-blue-600 hover:text-blue-800"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a 
          href="https://instagram.com/grocerymoney" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon text-pink-600 hover:text-pink-800"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon text-green-600 hover:text-green-800"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a 
          href="https://youtube.com/grocerymoney" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon text-red-600 hover:text-red-800"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a 
          href="https://twitter.com/grocerymoney" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-icon text-black hover:text-gray-800"
        >
          <i className="fab fa-x-twitter"></i>
        </a>
      </div>
      <div className="mt-6 bg-green-50 p-4 rounded-lg">
        <p className="text-sm">Our team will contact you within 24 hours</p>
        <p className="mt-2">Email: <strong>support@grocerymoney.com</strong></p>
      </div>
    </div>
  );
};

export default ThankYouStep;