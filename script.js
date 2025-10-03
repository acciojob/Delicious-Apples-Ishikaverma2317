// Image switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail click functionality
    const thumbnails = document.querySelectorAll('.photo_address img');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const productContainer = this.closest('.product');
            const mainImg = productContainer.querySelector('.photo_index');
            
            // Replace the main image with clicked thumbnail
            const newSrc = this.src.replace('w=100&h=100', 'w=400&h=400');
            mainImg.src = newSrc;
            
            // Add active state to clicked thumbnail
            thumbnails.forEach(t => t.style.borderColor = '#bdc3c7');
            this.style.borderColor = '#3498db';
        });
    });

    // Add to cart button animation
    const addToCartBtn = document.querySelector('.add-to-cart');
    
    addToCartBtn.addEventListener('click', function() {
        // Simple animation for demonstration
        this.textContent = 'ADDED TO CART!';
        this.style.background = 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)';
        
        setTimeout(() => {
            this.textContent = 'ADD TO CART';
            this.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
        }, 2000);
    });

    // Product hover effects enhancement
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        product.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        product.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Color items hover effect
    const colorItems = document.querySelectorAll('.color-item');
    
    colorItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Benefits section animation
    const benefitItems = document.querySelectorAll('.benefit-item');
    
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    benefitItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });

    // Price display animation
    const priceElement = document.querySelector('.viewers .price');
    
    if (priceElement) {
        let currentPrice = 0;
        const targetPrice = 738;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = targetPrice / steps;
        const stepTime = duration / steps;

        const animatePrice = setInterval(() => {
            currentPrice += increment;
            if (currentPrice >= targetPrice) {
                currentPrice = targetPrice;
                clearInterval(animatePrice);
            }
            priceElement.textContent = `$${Math.round(currentPrice)}`;
        }, stepTime);
    }
});

// Additional utility functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function updateProductDetails(productName, price, benefits) {
    // Function to update product details dynamically
    console.log(`Updating ${productName} details`);
}

// Export functions for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { formatPrice, updateProductDetails };
}